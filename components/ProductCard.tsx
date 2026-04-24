"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const hasSizes = (product.sizes?.length ?? 0) > 0;
  // For products with sizes, show a "from" price based on the cheapest size
  const fromPrice = hasSizes
    ? Math.min(...product.sizes!.map((s) => s.price))
    : product.price;

  const handleAdd = () => {
    // Single-size products add directly; multi-size send users to detail page.
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
      style={{ background: "#141414", borderColor: "#262626" }}>

      {/* Product image area — full bottle visible, blurred-self backdrop */}
      <Link href={`/products/${product.slug}`}
        className="block relative aspect-square overflow-hidden">

        {/* Blurred backdrop made from the same image — gives a colored
            ambient background instead of plain black, with no crop. */}
        <img src={product.image} alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "blur(28px) brightness(0.55) saturate(1.25)", transform: "scale(1.2)" }}/>

        {/* Tag badge */}
        <span className="absolute top-3 left-3 z-10 font-sans font-bold text-white px-2.5 py-1"
          style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "#1a1a1a" }}>
          {product.tag}
        </span>

        {/* Sizes badge (only when the product has multiple sizes) */}
        {hasSizes && (
          <span className="absolute top-3 right-3 z-10 font-sans font-bold text-white px-2.5 py-1"
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "rgba(90,148,82,0.85)",
            }}>
            {product.sizes!.length} sizes
          </span>
        )}

        {/* Foreground photo — full bottle, no crop */}
        <img src={product.image} alt={product.name}
          className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"/>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"/>
      </Link>

      {/* Info — tightened, fills remaining height so cards align */}
      <div className="px-5 py-4 border-t flex-1 flex flex-col" style={{ borderColor: "#262626" }}>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-white leading-tight mb-1.5 group-hover:text-[#5a9452] transition-colors"
            style={{ fontSize: "1.15rem", fontWeight: 500 }}>
            {product.name}
          </h3>
        </Link>

        <p className="text-white/55 leading-snug mb-4 flex-1"
          style={{ fontSize: "0.75rem", lineHeight: 1.55, minHeight: "2.4em" }}>
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display text-white block" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
              {hasSizes ? (
                <>
                  <span className="text-white/45 font-sans font-medium mr-1"
                    style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    From
                  </span>
                  ${fromPrice.toFixed(2)}
                </>
              ) : (
                <>${product.price.toFixed(2)}</>
              )}
            </span>
            <span
              className="font-sans block mt-0.5"
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Plus tax &amp; shipping
            </span>
          </div>

          {hasSizes ? (
            <Link
              href={`/products/${product.slug}`}
              className="font-sans font-semibold transition-all duration-300 border px-3.5 py-1.5 text-white border-white/60 hover:bg-white hover:text-black"
              style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Choose Size
            </Link>
          ) : (
            <button onClick={handleAdd}
              className={`font-sans font-semibold transition-all duration-300 border px-3.5 py-1.5 ${
                added
                  ? "text-[#5a9452] border-[#5a9452] scale-95"
                  : "text-white border-white/60 hover:bg-white hover:text-black"
              }`}
              style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {added ? "✓ ADDED" : "ADD TO CART"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
