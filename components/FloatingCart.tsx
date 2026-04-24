"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cart";

/**
 * A floating cart bubble that lives in the bottom-right corner of every page.
 *
 * - Hidden when the cart is empty.
 * - Hidden on /cart and /checkout (no point showing a "go to cart" button on the cart).
 * - Shows the live item count in a small badge.
 * - Briefly bounces whenever the item count goes up, so adding an item feels confirmed.
 */
export default function FloatingCart() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems());

  // Avoid SSR/hydration mismatch — Zustand persist only reads localStorage on the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Bounce animation when count increases (e.g. user just added an item).
  const [bounce, setBounce] = useState(false);
  const prevCountRef = useRef(0);
  useEffect(() => {
    if (totalItems > prevCountRef.current) {
      setBounce(true);
      const t = setTimeout(() => setBounce(false), 600);
      return () => clearTimeout(t);
    }
    prevCountRef.current = totalItems;
  }, [totalItems]);

  if (!mounted) return null;
  if (totalItems === 0) return null;
  if (pathname === "/cart" || pathname === "/checkout") return null;

  return (
    <Link
      href="/cart"
      aria-label={`View cart — ${totalItems} item${totalItems === 1 ? "" : "s"}`}
      className="fixed z-50 flex items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:scale-110"
      style={{
        bottom: "24px",
        right: "24px",
        width: "62px",
        height: "62px",
        background: "#3a6b35",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06) inset",
        transform: bounce ? "scale(1.15)" : "scale(1)",
      }}
    >
      {/* Bag icon */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>

      {/* Item count badge */}
      <span
        aria-hidden="true"
        className="absolute font-sans font-bold text-white flex items-center justify-center rounded-full"
        style={{
          top: "-4px",
          right: "-4px",
          minWidth: "24px",
          height: "24px",
          padding: "0 6px",
          fontSize: "11px",
          background: "#b23a2a",
          border: "2px solid #0a0a0a",
          lineHeight: 1,
        }}
      >
        {totalItems > 99 ? "99+" : totalItems}
      </span>
    </Link>
  );
}
