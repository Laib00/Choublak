"use client";

import { useState } from "react";
import Link from "next/link";
import { Package } from "@/lib/packages";
import { useCartStore } from "@/store/cart";

export default function PackageDetailClient({ pkg }: { pkg: Package }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  // The 5 image slots — main + up to 4 gallery shots.
  const allImages = [pkg.image, ...(pkg.gallery ?? [])].slice(0, 5);
  const [activeImage, setActiveImage] = useState(pkg.image);

  const handleAdd = () => {
    addItem(pkg, quantity);
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
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <span>/</span>
          <span className="text-white/80">{pkg.name}</span>
        </nav>
      </div>

      {/* Main 2-col layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Bundle photo + 4-image gallery */}
          <div>
            {/* Main image */}
            <div className="relative overflow-hidden mx-auto"
              style={{ maxWidth: "360px", aspectRatio: "4 / 5" }}>
              <span className="absolute top-3 left-3 z-10 font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                style={{ background: pkg.accentColor }}>
                {pkg.tag}
              </span>

              <img src={activeImage} alt={pkg.name}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"/>
            </div>

            {/* Thumbnail gallery — up to 4 */}
            <div className="flex gap-2 mt-3 justify-center overflow-x-auto pb-1">
              {allImages.map((src, i) => {
                const isActive = src === activeImage;
                return (
                  <button key={src + i}
                    onClick={() => setActiveImage(src)}
                    aria-label={`View photo ${i + 1}`}
                    className="relative flex-shrink-0 overflow-hidden border transition-all"
                    style={{
                      width: "64px",
                      height: "64px",
                      borderColor: isActive ? "#5a9452" : "#262626",
                      borderWidth: isActive ? "2px" : "1px",
                      opacity: isActive ? 1 : 0.65,
                    }}>
                    <img src={src} alt={`${pkg.name} ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"/>
                  </button>
                );
              })}
            </div>

            {/* What's inside — replaces the spec pills */}
            <div className="mt-6 rounded-2xl px-6 py-5 border"
              style={{ background: "#141414", borderColor: "#262626" }}>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/45 mb-3">
                What&apos;s inside
              </p>
              <ul className="space-y-2">
                {pkg.contents.map((line) => (
                  <li key={line} className="flex items-start gap-2 font-sans text-sm text-white/85">
                    <span style={{ color: "#5a9452" }} className="mt-0.5">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Info + buy */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border"
              style={{ color: "#5a9452", background: "rgba(90,148,82,0.1)", borderColor: "rgba(90,148,82,0.35)" }}>
              {pkg.origin}
            </span>

            <h1 className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              {pkg.name}
            </h1>

            <p className="font-sans text-sm text-white/55 leading-relaxed mb-8 max-w-md">
              {pkg.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">${pkg.price.toFixed(2)}</span>
                <span className="font-sans text-sm text-white/45">/ bundle</span>
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
                className={`flex-1 font-sans text-sm font-semibold tracking-wide uppercase rounded-full transition-all duration-300 py-3 text-white hover:shadow-lg`}
                style={{ background: added ? "#5a9452" : "#3a6b35" }}>
                {added ? "✓ Added to Cart" : "Add Bundle to Cart"}
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
      </div>
    </div>
  );
}
