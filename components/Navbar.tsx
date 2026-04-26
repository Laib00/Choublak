"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rawTotalItems = useCartStore((s) => s.totalItems)();
  // Only trust the cart count after the client has mounted — avoids
  // hydration mismatch because the persisted cart is not available on the server.
  const totalItems = mounted ? rawTotalItems : 0;

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Pure Leaf: solid BLACK navbar, always opaque */
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{ backgroundColor: "#111111" }}>
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-14 h-[96px] flex items-center justify-between">

        {/* Logo — top left, larger, with registered ® mark */}
        <Link href="/" className="flex-shrink-0 group flex items-start">
          <img src="/images/logo.png" alt="Choublak"
            className="h-20 w-auto object-contain"
            style={{ maxHeight: "84px" }}/>
          <span
            aria-label="Registered trademark"
            className="font-sans text-white/85"
            style={{
              fontSize: "11px",
              lineHeight: 1,
              marginTop: "22px",
              marginLeft: "-4px",
              fontWeight: 500,
            }}
          >
            ®
          </span>
        </Link>

        {/* Desktop nav — right side, exactly like PureLeaf uppercase spaced links */}
        <ul className="hidden lg:flex items-center gap-10">
          {[
            { label: "HOME", href: "/" },
            { label: "OUR STORY", href: "/about" },
            { label: "PRODUCTS", href: "/products" },
            { label: "PACKAGES", href: "/packages" },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href}
                className="font-sans font-medium text-white/90 hover:text-white transition-colors relative group"
                style={{ fontSize: "0.72rem", letterSpacing: "0.18em" }}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"/>
              </Link>
            </li>
          ))}

          {/* Cart — icon + count */}
          <li>
            <Link href="/cart" className="relative flex items-center gap-2 font-sans font-medium text-white/90 hover:text-white transition-colors"
              style={{ fontSize: "0.72rem", letterSpacing: "0.18em" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              CART
              {totalItems > 0 && (
                <span className="absolute -top-2.5 -right-3 w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center font-bold"
                  style={{ fontSize: "0.6rem" }}>
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}/>
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}/>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5" style={{ backgroundColor: "#111111" }}>
          {[
            { label: "HOME", href: "/" },
            { label: "OUR STORY", href: "/about" },
            { label: "PRODUCTS", href: "/products" },
            { label: "PACKAGES", href: "/packages" },
            { label: `CART (${totalItems})`, href: "/cart" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="font-sans font-medium text-white/80 hover:text-white transition-colors"
              style={{ fontSize: "0.72rem", letterSpacing: "0.2em" }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
