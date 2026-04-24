import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products — Choublak",
  description: "Single-origin teas from the world's finest high-altitude gardens.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "128px", background: "#0a0a0a" }}>
      {/* Page header — compact */}
      <div className="border-b py-8 px-6 text-center"
        style={{ background: "#0a0a0a", borderColor: "#1f1f1f" }}>
        <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: "#5a9452" }}>The Collection</p>
        <h1 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)" }}>
          Our Products
        </h1>
        <p className="font-sans text-xs text-white/55 max-w-md mx-auto leading-relaxed">
          Crafted from the leaves of the Hibiscus sabdariffa — a ruby-red brew carrying centuries of tradition into every cup.
        </p>
        <p
          className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase mt-3"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Tax &amp; shipping calculated at checkout
        </p>
      </div>

      {/* Products grid — compact so both cards sit above the fold */}
      <section className="py-8 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 100} className="h-full">
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          {/* "Why Choublak" callout below grid */}
          <ScrollReveal delay={200}>
            <div className="mt-20 px-10 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border"
              style={{ background: "#111111", borderColor: "#262626" }}>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "#5a9452" }}>Why Choublak</p>
                <h3 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
                  Real tea.<br/>Real difference.
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed">
                  Crafted from the leaves of the Choublak plant — the Hibiscus Sabdariffa — for a vibrant, refreshing infusion that brings a touch of heritage to every cup.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { stat: "100%", label: "Real brewed tea" },
                  { stat: "0", label: "Artificial ingredients" },
                  { stat: "✓", label: "Rich in antioxidants" },
                  { stat: "✓", label: "Hot or iced" },
                ].map(s => (
                  <div key={s.label} className="p-5 border" style={{ background: "#181818", borderColor: "#2a2a2a" }}>
                    <p className="font-display text-3xl font-bold text-white mb-1">{s.stat}</p>
                    <p className="font-sans text-xs text-white/50 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
