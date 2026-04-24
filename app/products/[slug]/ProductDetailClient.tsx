"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  // Full image set for the gallery (main image + any extras)
  const allImages = [product.image, ...(product.gallery ?? [])];
  const [activeImage, setActiveImage] = useState(product.image);

  // Size selection (only when the product defines sizes)
  const hasSizes = (product.sizes?.length ?? 0) > 0;
  const [selectedSizeId, setSelectedSizeId] = useState<string | undefined>(
    hasSizes ? product.sizes![0].id : undefined
  );
  const selectedSize = hasSizes
    ? product.sizes!.find((s) => s.id === selectedSizeId) ?? product.sizes![0]
    : undefined;

  // Live price + weight reflect the chosen size
  const displayPrice = selectedSize ? selectedSize.price : product.price;
  const displayWeight = selectedSize ? selectedSize.weight : product.weight;

  const handleAdd = () => {
    addItem(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: "128px", background: "#0a0a0a" }}>
      {/* Breadcrumb */}
      <div className="border-b px-6 lg:px-10 py-4" style={{ borderColor: "#1f1f1f" }}>
        <nav className="max-w-7xl mx-auto flex items-center gap-2 font-sans text-xs text-white/45">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Our Products</Link>
          <span>/</span>
          <span className="text-white/80">{product.name}</span>
        </nav>
      </div>

      {/* Main 2-col layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Product visual — compact, no card chrome */}
          <div>
            {/* Main image — capped height, no border, no background */}
            <div className="relative overflow-hidden mx-auto"
              style={{ maxWidth: "360px", aspectRatio: "4 / 5" }}>
              {/* Tag */}
              <span className="absolute top-3 left-3 z-10 font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                style={{ background: product.accentColor }}>
                {product.tag}
              </span>

              {/* Active product photo */}
              <img src={activeImage} alt={product.name}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"/>
            </div>

            {/* Thumbnail gallery — only renders if there's more than one image */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-3 justify-center overflow-x-auto pb-1">
                {allImages.map((src, i) => {
                  const isActive = src === activeImage;
                  return (
                    <button key={src + i}
                      onClick={() => setActiveImage(src)}
                      aria-label={`View photo ${i + 1}`}
                      className="relative flex-shrink-0 overflow-hidden border transition-all"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderColor: isActive ? "#5a9452" : "#262626",
                        borderWidth: isActive ? "2px" : "1px",
                        opacity: isActive ? 1 : 0.65,
                      }}>
                      <img src={src} alt={`${product.name} ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"/>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Spec pills */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                { label: "Ingredient", value: "100% Hibiscus" },
                { label: "Weight", value: displayWeight },
                { label: "Temperature", value: product.temperature },
                { label: "Steep Time", value: product.steepTime },
              ].map(s => (
                <div key={s.label} className="rounded-2xl px-5 py-4 border"
                  style={{ background: "#141414", borderColor: "#262626" }}>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/45 mb-1">{s.label}</p>
                  <p className="font-sans text-sm font-semibold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Info + buy */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border"
              style={{ color: "#5a9452", background: "rgba(90,148,82,0.1)", borderColor: "rgba(90,148,82,0.35)" }}>
              {product.origin}
            </span>

            <h1 className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              {product.name}
            </h1>

            <p className="font-sans text-sm text-white/55 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Size picker */}
            {hasSizes && (
              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-white/55">
                    Size
                  </p>
                  <p className="font-sans text-xs text-white/50">
                    {selectedSize?.label} · {selectedSize?.weight}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes!.map((s) => {
                    const active = s.id === selectedSizeId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSizeId(s.id)}
                        className="text-left px-4 py-3 border rounded-xl transition-all"
                        style={{
                          background: active ? "rgba(90,148,82,0.12)" : "#141414",
                          borderColor: active ? "#5a9452" : "#262626",
                          borderWidth: active ? "2px" : "1px",
                        }}
                      >
                        <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-white/55">
                          {s.label}
                        </p>
                        <p className="font-display text-base font-semibold text-white mt-1">
                          ${s.price.toFixed(2)}
                        </p>
                        <p className="font-sans text-[10px] text-white/40 mt-0.5">
                          {s.weight}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">${displayPrice.toFixed(2)}</span>
                <span className="font-sans text-sm text-white/45">/ {displayWeight}</span>
              </div>
              <p
                className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mt-1.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Plus tax &amp; shipping at checkout
              </p>
            </div>

            <div className="h-px mb-8" style={{ background: "#1f1f1f" }}/>

            {/* Quantity + Add */}
            <div className="flex gap-3 mb-5">
              <div className="flex items-center border rounded-full overflow-hidden"
                style={{ borderColor: "#2a2a2a", background: "#141414" }}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 flex items-center justify-center text-white/70 hover:bg-white/5 text-lg font-light transition-colors" style={{height:"52px"}}>
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm font-semibold text-white">
                  {quantity}
                </span>
                <button onClick={() => setQuantity(q => q + 1)}
                  className="w-12 flex items-center justify-center text-white/70 hover:bg-white/5 text-lg font-light transition-colors" style={{height:"52px"}}>
                  +
                </button>
              </div>

              <button onClick={handleAdd}
                className={`flex-1 font-sans text-sm font-semibold tracking-wide uppercase rounded-full transition-all duration-300 py-3 ${
                  added
                    ? "text-white"
                    : "text-white hover:shadow-lg"
                }`}
                style={{ background: added ? "#5a9452" : "#3a6b35" }}>
                {added ? "✓ Added to Cart" : "Add to Cart"}
              </button>
            </div>

            {added && (
              <p className="text-center font-sans text-xs animate-fade-in mb-4" style={{ color: "#5a9452" }}>
                <Link href="/cart" className="underline underline-offset-2 hover:text-white">View Cart →</Link>
              </p>
            )}

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t" style={{ borderColor: "#1f1f1f" }}>
              {[
                { icon: "🚚", label: "Free shipping", sub: "Over $40" },
                { icon: "🔒", label: "Secure pay", sub: "Via Stripe" },
                { icon: "🍃", label: "Eco packaging", sub: "Compostable" },
              ].map(b => (
                <div key={b.label} className="text-center">
                  <span className="text-2xl block mb-1">{b.icon}</span>
                  <p className="font-sans text-[10px] font-semibold text-white/80">{b.label}</p>
                  <p className="font-sans text-[10px] text-white/45">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brewing guide — full width below */}
        <div className="mt-20 pt-16 border-t" style={{ borderColor: "#1f1f1f" }}>
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: "#5a9452" }}>How to Brew</p>
            <h2 className="font-display font-bold text-white text-3xl">The Perfect Cup</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { n: "01", title: "Measure", detail: "1 tsp per 200ml water" },
              { n: "02", title: "Heat", detail: product.temperature },
              { n: "03", title: "Steep", detail: product.steepTime },
              { n: "04", title: "Savour", detail: "Re-steep 2–3 times" },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(90,148,82,0.12)", borderColor: "rgba(90,148,82,0.5)" }}>
                  <span className="font-display text-sm font-bold" style={{ color: "#5a9452" }}>{s.n}</span>
                </div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-1">{s.title}</p>
                <p className="font-sans text-sm text-white/80">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
