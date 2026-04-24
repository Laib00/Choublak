"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart";

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-cream-50 pt-20 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Animated checkmark */}
        <div className="w-28 h-28 rounded-full bg-sage-100 border-2 border-sage-200 flex items-center justify-center mx-auto mb-10 relative">
          <div className="absolute inset-0 rounded-full bg-sage-200 animate-ping opacity-20" />
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6d8f4a" strokeWidth="2" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>

        <span className="font-sans text-xs uppercase tracking-[0.35em] text-sage-500 block mb-4">Order Confirmed</span>
        <h1 className="font-display text-5xl md:text-6xl font-light text-bark-800 mb-6" style={{ letterSpacing: "-0.02em" }}>
          Thank you.
        </h1>
        <p className="font-sans text-base text-bark-500 leading-relaxed mb-4">
          Your order has been placed successfully. Your teas are being prepared with care and will be on their way soon.
        </p>
        <p className="font-sans text-sm text-bark-400 mb-12">
          A confirmation email will arrive in your inbox shortly.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="w-12 h-px bg-sage-200" />
          <svg width="20" height="24" viewBox="0 0 200 250" fill="none">
            <path d="M100 10C60 50 20 90 20 150a80 80 0 00160 0c0-60-40-100-80-140z" fill="#b3c99a"/>
          </svg>
          <div className="w-12 h-px bg-sage-200" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-block font-sans text-sm font-medium uppercase tracking-widest px-10 py-4 rounded-full bg-bark-800 text-cream-50 hover:bg-sage-600 transition-all duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-block font-sans text-sm font-medium uppercase tracking-widest px-10 py-4 rounded-full border border-bark-200 text-bark-600 hover:border-bark-400 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
