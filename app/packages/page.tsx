import { packages } from "@/lib/packages";
import PackageCard from "@/components/PackageCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Packages — Choublak",
  description:
    "Curated bundles of our hibiscus teas — designed to share, gift, or savour on your own.",
};

export default function PackagesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ paddingTop: "128px", background: "#0a0a0a" }}
    >
      {/* Page header */}
      <div
        className="border-b py-8 px-6 text-center"
        style={{ background: "#0a0a0a", borderColor: "#1f1f1f" }}
      >
        <p
          className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase mb-2"
          style={{ color: "#5a9452" }}
        >
          The Bundles
        </p>
        <h1
          className="font-display font-bold text-white mb-2"
          style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)" }}
        >
          Our Packages
        </h1>
        <p className="font-sans text-xs text-white/55 max-w-md mx-auto leading-relaxed">
          Hand-picked bundles of our hibiscus teas — designed to share, gift,
          or savour on your own.
        </p>
        <p
          className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase mt-3"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Tax &amp; shipping calculated at checkout
        </p>
      </div>

      {/* Packages grid */}
      <section className="py-8 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {packages.map((pkg, i) => (
              <ScrollReveal
                key={pkg.id}
                delay={i * 100}
                className="h-full"
              >
                <PackageCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
