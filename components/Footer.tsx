import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", color: "white" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-5">
              <p className="font-sans font-black text-white tracking-[0.15em] uppercase" style={{ fontSize: "1rem" }}>CHOUBLAK</p>
              <p className="font-sans font-light text-white/30 tracking-[0.35em] uppercase" style={{ fontSize: "0.42rem", marginTop: "3px" }}>Pure Tea Co.</p>
            </div>
            <p className="text-white/40 leading-relaxed mb-6" style={{ fontSize: "0.8rem" }}>
              Crafted from the leaves of the Hibiscus sabdariffa. Real brewed. No compromises.
            </p>

            {/* Instagram call-out */}
            <a
              href="#"
              aria-label="Follow Choublak on Instagram"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all hover:bg-white/5"
              style={{ borderColor: "#2a2a2a" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.247 2.227.413.56.217.96.477 1.38.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.249 1.805-.413 2.227a3.72 3.72 0 01-.896 1.381 3.72 3.72 0 01-1.38.896c-.422.164-1.057.36-2.227.413-1.265.057-1.645.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.053-1.805-.249-2.227-.413a3.72 3.72 0 01-1.38-.896 3.72 3.72 0 01-.896-1.38c-.165-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.247-1.805.413-2.227.217-.56.477-.96.896-1.38.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384-.667.666-1.079 1.336-1.384 2.126C.333 4.905.131 5.775.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.148.558 2.913.306.788.717 1.458 1.384 2.126.666.667 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.058 2.148-.262 2.913-.558a5.89 5.89 0 002.126-1.384 5.89 5.89 0 001.384-2.126c.297-.765.499-1.636.558-2.913.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.148-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.89 5.89 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span
                className="font-sans font-semibold text-white"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Follow on Instagram
              </span>
            </a>
          </div>

          {[
            { title: "SHOP", links: [{ l: "All Products", h: "/products" }, { l: "Choublak Tea", h: "/products/choublak-tea" }, { l: "Kremas", h: "/products/kremas" }, { l: "Packages", h: "/packages" }, { l: "Cart", h: "/cart" }] },
            { title: "COMPANY", links: [{ l: "Our Story", h: "/about" }, { l: "Sourcing", h: "#" }, { l: "Sustainability", h: "#" }] },
            { title: "FOLLOW", links: [{ l: "Instagram", h: "#" }, { l: "Pinterest", h: "#" }, { l: "X (Twitter)", h: "#" }] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-sans font-bold text-white/30 mb-5"
                style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.l}>
                    <Link href={l.h} className="text-white/50 hover:text-white transition-colors"
                      style={{ fontSize: "0.82rem" }}>{l.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "#1f1f1f" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25" style={{ fontSize: "0.75rem" }}>
            &copy; {new Date().getFullYear()} Choublak Tea Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map(l => (
              <span key={l} className="text-white/25 cursor-default" style={{ fontSize: "0.75rem" }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
