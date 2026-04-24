import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — Full-bleed photo background (home.png) with
          "TRY OUR" → giant script headline → paragraph →
          outlined white CTA button overlaid on top.
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden"
        style={{ paddingTop: "96px" }}>

        {/* Full-bleed hero photo */}
        <img src="/images/home.png" alt="Choublak Tea"
          className="absolute inset-0 w-full h-full object-cover"/>

        {/* Left-side darkening overlay — stronger on the left so text stays legible */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0) 65%)" }}/>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(0,0,0,0.25) 100%)" }}/>

        {/* LEFT-ALIGNED TEXT */}
        <div className="relative z-10 text-left px-6 sm:px-10 lg:px-16 max-w-xl lg:max-w-lg lg:ml-[4%]">
          {/* "TRY OUR" — small caps like PureLeaf */}
          <p className="anim-fade-up font-sans font-medium text-white mb-3"
            style={{ fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase",
              textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
            TRY OUR
          </p>

          {/* Giant script headline — exactly like "Pure Leaf Variety" */}
          <h1 className="anim-fade-up anim-delay-1 font-script text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.05,
              textShadow: "0 2px 30px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.5)" }}>
            Choublak Drink
          </h1>

          {/* Tagline paragraph — same style as PureLeaf */}
          <p className="anim-fade-up anim-delay-2 text-white mt-5 mb-10 max-w-md"
            style={{ fontSize: "0.9rem", lineHeight: 1.75, letterSpacing: "0.02em",
              textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}>
            A Taste of Tradition, Wellness, and Delight.
          </p>

          {/* Outlined white button — exact PureLeaf style */}
          <div className="anim-fade-up anim-delay-3">
            <Link href="/products" className="btn-outline-white">
              OUR TEAS
            </Link>
          </div>
        </div>

        {/* Bottom ground shadow */}
        <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.35) 0%, transparent 100%)" }}/>
      </section>


      {/* ══════════════════════════════════════════════════════
          MARQUEE STRIP — PureLeaf has a scrolling text band
      ══════════════════════════════════════════════════════ */}
      <section className="py-5 overflow-hidden border-y" style={{ background: "#1a1a1a", borderColor: "#333" }}>
        <div className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 18s linear infinite" }}>
          {Array(3).fill(["✦ SINGLE ORIGIN", "✦ NO ARTIFICIAL FLAVOURS", "✦ REAL BREWED TEA", "✦ HAND SOURCED LEAVES", "✦ PURE TASTE"]).flat().map((t, i) => (
            <span key={i} className="font-sans font-medium text-white/60 flex-shrink-0"
              style={{ fontSize: "0.65rem", letterSpacing: "0.25em" }}>{t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
      </section>


      {/* ══════════════════════════════════════════════════════
          COLLECTION TEASER — bottle-lineup photo background
          Drop the bottle lineup image at:
            /public/images/bottles-lineup.png
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36 px-6 text-center"
        style={{ background: "#0a0a0a" }}>

        {/* Full-bleed bottle lineup photo */}
        <img src="/images/bottles-lineup.png" alt="Choublak bottle lineup"
          className="absolute inset-0 w-full h-full object-cover opacity-70"/>

        {/* Readability overlays — darker center column so text pops */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.7) 100%)" }}/>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)" }}/>

        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="font-sans font-semibold mb-2"
              style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8ecd84", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              THE COLLECTION
            </p>
            <h2 className="font-script text-white mt-2"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Our Finest Teas
            </h2>
            <div className="w-10 h-px bg-white/40 mx-auto mt-5 mb-7"/>
            <p className="font-sans text-white leading-relaxed mb-9 max-w-md mx-auto"
              style={{ fontSize: "0.9rem", lineHeight: 1.75, textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}>
              Vibrant ruby-red infusions crafted from the leaves of the Hibiscus
              sabdariffa — a taste of tradition, wellness, and delight. Explore
              the full collection to find your cup.
            </p>
            <Link href="/products" className="btn-outline-white">
              VIEW OUR TEAS
            </Link>
          </ScrollReveal>
        </div>
      </section>




      {/* ══════════════════════════════════════════════════════
          STORY STRIP — three full-bleed clip tiles (PureLeaf style)
          Drop short .mp4 clips into /public/videos/ using the
          filenames below and they'll autoplay here. Until then
          each tile shows a themed gradient so the layout holds.
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              kicker: "HERITAGE",
              body:
                "Crafted from the leaves of the Hibiscus sabdariffa — a ruby-red brew that carries centuries of tradition into every cup.",
              cta: "OUR STORY",
              href: "/about",
              video: "/videos/heritage.mp4",
              gradient:
                "linear-gradient(135deg,#1a2a1a 0%,#2d4a2a 50%,#3a5a32 100%)",
            },
            {
              kicker: "THE RUBY BREW",
              body:
                "A vibrant ruby-red hue and a refreshingly tart taste that dances on the palate with every sip.",
              cta: "EXPLORE",
              href: "/products",
              video: "/videos/brew.mp4",
              gradient:
                "linear-gradient(135deg,#2a0a08 0%,#7a1a1a 55%,#b23a2a 100%)",
            },
            {
              kicker: "NATURAL WELLNESS",
              body:
                "Rich in antioxidants and vitamin C — a soothing infusion that supports vitality and daily rituals.",
              cta: "LEARN MORE",
              href: "/about",
              video: "/videos/wellness.mp4",
              gradient:
                "linear-gradient(135deg,#111c12 0%,#1f3a20 55%,#4d6a3a 100%)",
            },
          ].map((t) => (
            <article
              key={t.kicker}
              className="relative overflow-hidden"
              style={{ minHeight: "clamp(420px, 60vh, 620px)" }}
            >
              {/* gradient fallback — always visible under the video */}
              <div
                className="absolute inset-0"
                style={{ background: t.gradient }}
              />

              {/* background video — shows once a file exists at the path */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={t.video} type="video/mp4" />
              </video>

              {/* darkening overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
                }}
              />

              {/* content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 py-24">
                <p
                  className="font-sans font-semibold text-white mb-5"
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {t.kicker}
                </p>
                <p
                  className="font-sans text-white/90 leading-relaxed mb-9 max-w-xs"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}
                >
                  {t.body}
                </p>
                <Link
                  href={t.href}
                  className="inline-block font-sans font-semibold text-white border transition-colors hover:bg-white/15"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "13px 36px",
                    borderColor: "rgba(255,255,255,0.9)",
                    borderWidth: "1.5px",
                  }}
                >
                  {t.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          NO ARTIFICIAL FLAVOURS BAND — dark surface
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-display font-light text-white" style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)" }}>
                No Artificial Flavours. <em>Ever.</em>
              </h2>
              <p className="text-white/60 mt-4 max-w-lg mx-auto" style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
                Real brewed tea. Pure water. That&apos;s it. Crafted from the leaves of the Hibiscus Sabdariffa for a taste that carries centuries of tradition.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                image: "/images/ruby_red_brew.jpeg",
                title: "Ruby-Red Brew",
                body: "A vibrant hibiscus-red hue and a refreshing, tart taste that dances on the palate.",
              },
              {
                image: "/images/natural_wellness.jpeg",
                title: "Natural Wellness",
                body: "Rich in antioxidants and vitamin C &mdash; a soothing infusion that supports vitality.",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div className="text-center h-full border overflow-hidden flex flex-col"
                  style={{ background: "#181818", borderColor: "#262626" }}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                    <img src={p.image} alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"/>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-sans font-semibold text-white mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {p.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.85rem" }}
                      dangerouslySetInnerHTML={{ __html: p.body }}/>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
