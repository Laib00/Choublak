"use client";

import Link from "next/link";
import { Package } from "@/lib/packages";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className="group border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
      style={{ background: "#141414", borderColor: "#262626" }}
    >
      {/* Image area — blurred-self backdrop, full bundle visible */}
      <Link
        href={`/packages/${pkg.slug}`}
        className="block relative aspect-square overflow-hidden"
      >
        {/* Blurred backdrop made from the same image */}
        <img
          src={pkg.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "blur(28px) brightness(0.55) saturate(1.25)",
            transform: "scale(1.2)",
          }}
        />

        {/* Tag badge */}
        <span
          className="absolute top-3 left-3 z-10 font-sans font-bold text-white px-2.5 py-1"
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: pkg.accentColor,
          }}
        >
          {pkg.tag}
        </span>

        {/* Bundle count badge */}
        <span
          className="absolute top-3 right-3 z-10 font-sans font-bold text-white px-2.5 py-1"
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "rgba(0,0,0,0.55)",
          }}
        >
          5 bottles
        </span>

        {/* Foreground photo */}
        <img
          src={pkg.image}
          alt={pkg.name}
          className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
      </Link>

      {/* Info */}
      <div
        className="px-5 py-4 border-t flex-1 flex flex-col"
        style={{ borderColor: "#262626" }}
      >
        <Link href={`/packages/${pkg.slug}`}>
          <h3
            className="font-display text-white leading-tight mb-2 group-hover:text-[#5a9452] transition-colors"
            style={{ fontSize: "1.15rem", fontWeight: 500 }}
          >
            {pkg.name}
          </h3>
        </Link>

        {/* Contents bullets — small, two lines */}
        <ul
          className="text-white/55 leading-snug mb-4 space-y-0.5 flex-1"
          style={{ fontSize: "0.72rem", lineHeight: 1.55 }}
        >
          {pkg.contents.map((line) => (
            <li key={line} className="flex items-start gap-1.5">
              <span style={{ color: "#5a9452" }}>•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span
              className="font-display text-white block"
              style={{ fontSize: "1.2rem", fontWeight: 600 }}
            >
              ${pkg.price.toFixed(2)}
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
          <Link
            href={`/packages/${pkg.slug}`}
            className="font-sans font-semibold transition-all duration-300 border px-3.5 py-1.5 text-white border-white/60 hover:bg-white hover:text-black"
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            View Bundle
          </Link>
        </div>
      </div>
    </div>
  );
}
