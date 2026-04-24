"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ProductSize } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
  /** Selected size, if the product has sizes */
  size?: ProductSize;
}

/** Stable key used to identify a cart line (product + size). */
export function cartItemKey(
  product: Pick<Product, "id">,
  size?: Pick<ProductSize, "id">
): string {
  return size ? `${product.id}:${size.id}` : product.id;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, size?: ProductSize) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

const lineUnitPrice = (item: CartItem) =>
  item.size ? item.size.price : item.product.price;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1, size) => {
        const key = cartItemKey(product, size);
        set((state) => {
          const existing = state.items.find(
            (item) => cartItemKey(item.product, item.size) === key
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                cartItemKey(item.product, item.size) === key
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { product, quantity, size }] };
        });
      },

      removeItem: (key) => {
        set((state) => ({
          items: state.items.filter(
            (item) => cartItemKey(item.product, item.size) !== key
          ),
        }));
      },

      updateQuantity: (key, quantity) => {
        if (quantity <= 0) {
          get().removeItem(key);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            cartItemKey(item.product, item.size) === key
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce(
          (sum, item) => sum + lineUnitPrice(item) * item.quantity,
          0
        );
      },
    }),
    {
      name: "choublak-cart",
      version: 2,
    }
  )
);
