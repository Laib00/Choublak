import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="w-28 h-28 rounded-full bg-bark-100 border-2 border-bark-200 flex items-center justify-center mx-auto mb-10">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8c7358" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>

        <span className="font-sans text-xs uppercase tracking-[0.35em] text-bark-400 block mb-4">Payment Cancelled</span>
        <h1 className="font-display text-5xl md:text-6xl font-light text-bark-800 mb-6" style={{ letterSpacing: "-0.02em" }}>
          No worries.
        </h1>
        <p className="font-sans text-base text-bark-500 leading-relaxed mb-12">
          Your payment was cancelled and nothing was charged. Your cart is still intact whenever you are ready to complete your order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cart"
            className="inline-block font-sans text-sm font-medium uppercase tracking-widest px-10 py-4 rounded-full bg-bark-800 text-cream-50 hover:bg-sage-600 transition-all duration-300"
          >
            Return to Cart
          </Link>
          <Link
            href="/products"
            className="inline-block font-sans text-sm font-medium uppercase tracking-widest px-10 py-4 rounded-full border border-bark-200 text-bark-600 hover:border-bark-400 transition-all duration-300"
          >
            Keep Browsing
          </Link>
        </div>
      </div>
    </div>
  );
}
