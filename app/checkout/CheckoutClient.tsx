"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
}

export default function CheckoutClient() {
  const { items, totalPrice } = useCartStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      router.push("/products");
      return;
    }
    setLoading(true);
    setError("");
    try {
      // Stripe not configured yet — show a friendly notice
    setError("💳 Payments are coming soon! Add your Stripe keys to .env.local to enable checkout.");
    setLoading(false);
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = totalPrice();
  // Shipping is added on top: $5.99 flat, free over $40.
  // Tax is calculated at the payment step based on the customer's address.
  const shipping = subtotal >= 40 ? 0 : 5.99;
  const total = subtotal + shipping;

  const fields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith", col: 2 },
    { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com", col: 2 },
    { name: "address", label: "Street Address", type: "text", placeholder: "123 Garden Lane", col: 2 },
    { name: "city", label: "City", type: "text", placeholder: "London", col: 1 },
    { name: "postcode", label: "Postcode / ZIP", type: "text", placeholder: "W1A 1AA", col: 1 },
    { name: "country", label: "Country", type: "text", placeholder: "United Kingdom", col: 2 },
  ] as const;

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/cart" className="inline-flex items-center gap-2 font-sans text-xs text-bark-400 hover:text-sage-600 transition-colors uppercase tracking-widest mb-6">
            ← Back to Cart
          </Link>
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-sage-500 block mb-3">Final Step</span>
          <h1 className="font-display text-5xl font-light text-bark-800" style={{ letterSpacing: "-0.02em" }}>
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-cream-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-medium text-bark-800 mb-6">Delivery Details</h2>
              <div className="grid grid-cols-2 gap-5">
                {fields.map((field) => (
                  <div key={field.name} className={field.col === 2 ? "col-span-2" : "col-span-1"}>
                    <label className="block font-sans text-xs uppercase tracking-widest text-bark-400 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full font-sans text-sm bg-cream-50 border border-cream-200 rounded-xl px-4 py-3.5 text-bark-800 placeholder-bark-300 outline-none focus:border-sage-400 focus:bg-white transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment notice */}
            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6d8f4a" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-bark-700 mb-1">Secure Payment via Stripe</p>
                <p className="font-sans text-xs text-bark-400 leading-relaxed">
                  You will be redirected to Stripe&apos;s secure payment page to complete your purchase. We accept all major credit and debit cards.
                </p>
              </div>
            </div>

            {error && (
              <div className="px-5 py-4 rounded-xl bg-red-50 border border-red-100">
                <p className="font-sans text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || items.length === 0}
              className={`w-full font-sans text-sm font-medium uppercase tracking-widest py-5 rounded-full transition-all duration-300 ${
                loading || items.length === 0
                  ? "bg-sage-200 text-sage-400 cursor-not-allowed"
                  : "bg-bark-800 text-cream-50 hover:bg-sage-600 hover:shadow-xl hover:shadow-sage-600/20"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30 70"/>
                  </svg>
                  Redirecting to Stripe…
                </span>
              ) : (
                `Pay Now — $${total.toFixed(2)}`
              )}
            </button>
          </form>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-cream-200 rounded-2xl p-7 sticky top-28">
              <h2 className="font-display text-xl font-medium text-bark-800 mb-6">Your Order</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const unitPrice = item.size ? item.size.price : item.product.price;
                  const lineKey = item.size
                    ? `${item.product.id}:${item.size.id}`
                    : item.product.id;
                  return (
                    <div key={lineKey} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${item.product.accentColor}22` }}
                      >
                        <svg width="20" height="24" viewBox="0 0 200 250" fill="none">
                          <path d="M100 10C60 50 20 90 20 150a80 80 0 00160 0c0-60-40-100-80-140z" fill={item.product.accentColor} opacity="0.7"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-sm font-medium text-bark-700 truncate">
                          {item.product.name}
                          {item.size && (
                            <span className="text-bark-400 font-normal"> · {item.size.label}</span>
                          )}
                        </p>
                        <p className="font-sans text-xs text-bark-400">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-sans text-sm font-medium text-bark-700 flex-shrink-0">
                        ${(unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-cream-200 pt-4 space-y-3">
                <div className="flex justify-between font-sans text-sm text-bark-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-bark-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-sage-500">Free</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-bark-400">
                  <span>Tax</span>
                  <span>Calculated at payment</span>
                </div>
                <div className="border-t border-cream-200 pt-3 flex justify-between">
                  <span className="font-sans text-sm font-medium text-bark-700">Total</span>
                  <span className="font-display text-2xl font-medium text-bark-800">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
