"use client";

import Link from "next/link";
import { cartItemKey, useCartStore } from "@/store/cart";
import { useState } from "react";

export default function CartClient() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();
  const [loading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setError("💳 Payments coming soon! Add your Stripe keys to .env.local to enable checkout.");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6"
        style={{ paddingTop: "128px", background: "#0a0a0a" }}>
        <div className="text-center max-w-sm">
          <div className="w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto mb-8"
            style={{ background: "rgba(90,148,82,0.1)", borderColor: "rgba(90,148,82,0.4)" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5a9452" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <h1 className="font-display font-bold text-white text-3xl mb-3">Your cart is empty</h1>
          <p className="font-sans text-sm text-white/50 mb-8 leading-relaxed">
            You haven&apos;t added any teas yet. Discover your perfect cup.
          </p>
          <Link href="/products" className="btn-green">Shop Now</Link>
        </div>
      </div>
    );
  }

  const subtotal = totalPrice();
  // Shipping is added on top: $5.99 flat, free over $40.
  // Tax is calculated at checkout based on the customer's address.
  const shipping = subtotal >= 40 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen" style={{ paddingTop: "128px", background: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14">
        <h1 className="font-display font-bold text-white text-4xl mb-12">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => {
              const key = cartItemKey(item.product, item.size);
              const unitPrice = item.size ? item.size.price : item.product.price;
              const unitWeight = item.size ? item.size.weight : item.product.weight;
              return (
                <div key={key}
                  className="flex gap-5 p-5 border transition-colors"
                  style={{ background: "#141414", borderColor: "#262626" }}>
                  {/* Product photo */}
                  <Link href={`/products/${item.product.slug}`}
                    className="w-24 h-24 flex-shrink-0 overflow-hidden block border"
                    style={{ background: "#000", borderColor: "#262626" }}>
                    <img src={item.product.image} alt={item.product.name}
                      className="w-full h-full object-cover"/>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <Link href={`/products/${item.product.slug}`}>
                          <h3 className="font-display font-semibold text-white text-lg hover:text-[#5a9452] transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="font-sans text-xs text-white/40 mt-0.5">
                          {item.size && (
                            <>
                              <span style={{ color: "#8ecd84" }}>{item.size.label}</span>
                              <span className="mx-1.5">·</span>
                            </>
                          )}
                          {unitWeight}{item.product.slug !== "kremas" && " · 100% Hibiscus"}
                        </p>
                      </div>
                      <button onClick={() => removeItem(key)}
                        className="text-white/30 hover:text-red-400 transition-colors flex-shrink-0 p-1"
                        aria-label="Remove item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-full overflow-hidden"
                        style={{ borderColor: "#2a2a2a", background: "#0f0f0f" }}>
                        <button onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center text-white/70 hover:bg-white/5 transition-colors text-sm">−</button>
                        <span className="w-8 text-center font-sans text-sm font-semibold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center text-white/70 hover:bg-white/5 transition-colors text-sm">+</button>
                      </div>
                      <span className="font-display text-xl font-bold text-white">
                        ${(unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <button onClick={clearCart}
              className="font-sans text-xs text-white/30 hover:text-red-400 transition-colors uppercase tracking-widest pt-2">
              Clear Cart
            </button>
          </div>

          {/* Summary */}
          <div>
            <div className="p-7 border sticky top-32"
              style={{ background: "#141414", borderColor: "#262626" }}>
              <h2 className="font-display font-bold text-white text-xl mb-7">Order Summary</h2>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between font-sans text-sm text-white/55">
                  <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-white/55">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0
                      ? <span className="font-medium" style={{ color: "#5a9452" }}>Free</span>
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-sans text-sm text-white/55">
                  <span>Tax</span>
                  <span className="text-white/40">Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t pt-4 mb-7 flex justify-between items-baseline"
                style={{ borderColor: "#262626" }}>
                <span className="font-sans text-sm font-semibold text-white/80">Total</span>
                <span className="font-display text-3xl font-bold text-white">${total.toFixed(2)}</span>
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 border"
                  style={{ background: "rgba(138,100,30,0.12)", borderColor: "rgba(200,160,60,0.35)" }}>
                  <p className="font-sans text-xs" style={{ color: "#d9b870" }}>{error}</p>
                </div>
              )}

              <button onClick={handleCheckout} disabled={loading}
                className="w-full btn-green text-center block" style={{ textAlign: "center" }}>
                {loading ? "Processing…" : "Proceed to Checkout"}
              </button>

              <div className="flex items-center justify-center gap-2 mt-5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a9452" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <p className="font-sans text-xs text-white/40">Secured by Stripe</p>
              </div>

              <div className="mt-5 pt-5 border-t text-center" style={{ borderColor: "#262626" }}>
                <Link href="/products"
                  className="font-sans text-xs text-white/50 hover:text-white transition-colors">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
