import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Choublak Tea",
  description:
    "Choublak Tea: a celebration of nature's finest flavors and centuries-old tradition, crafted from the leaves of the Hibiscus sabdariffa.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "128px", background: "#0a0a0a" }}>
      {/* ══════════════════════════════════════════════════════
          HERO — dark band with script headline
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-6 py-24 lg:py-32 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2a1410 0%, #5a1a1a 45%, #8a2020 100%)",
        }}
      >
        {/* Background photograph */}
        <img
          src="/images/our_story.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Darkening overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Decorative hibiscus leaf silhouette */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-[0.08] pointer-events-none">
          <svg width="420" height="500" viewBox="0 0 100 120" fill="none">
            <path
              d="M50 5C30 25 8 40 8 68a42 42 0 0084 0C92 40 70 25 50 5z"
              fill="white"
            />
            <path d="M50 5v110" stroke="black" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="font-sans font-medium text-white/70 mb-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            About Choublak
          </p>
          <h1
            className="font-script text-white mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.1,
              textShadow:
                "0 2px 30px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Choublak Tea
          </h1>
          <div className="w-10 h-px bg-white/50 mx-auto mb-6" />
          <p
            className="font-display italic text-white/90"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            A Taste of Tradition, Wellness, and Delight.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BIO — image left, prose right
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Hibiscus sabdariffa image */}
          <ScrollReveal>
            <div
              className="relative w-full overflow-hidden border"
              style={{
                aspectRatio: "4 / 5",
                background: "#111111",
                borderColor: "#262626",
              }}
            >
              <img
                src="/images/Hibiscus sabdariffa.png"
                alt="Hibiscus sabdariffa — the Choublak flower"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* RIGHT — story text */}
          <div>
            <ScrollReveal delay={80}>
              <p
                className="font-sans font-semibold mb-5"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#5a9452",
                }}
              >
                Our Story
              </p>
              <h2
                className="font-display font-light text-white leading-tight mb-8"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Nature&apos;s finest flavors,<br />
                <em>centuries-old tradition.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div
                className="space-y-6 text-white/65 leading-relaxed"
                style={{ fontSize: "1rem", lineHeight: 1.85 }}
              >
                <p>
                  Choublak Tea is a celebration of nature&apos;s finest flavors
                  and centuries-old tradition. Crafted from the leaves of the
                  Choublak plant—also known as the{" "}
                  <em>Hibiscus sabdariffa</em>—this tea offers a vibrant
                  ruby-red hue and a refreshing, tart taste that dances on the
                  palate. Known for its invigorating aroma and unique profile,
                  our Choublak Tea transcends ordinary beverages, bringing a
                  touch of heritage to every cup.
                </p>

                <p>
                  Cherished not only for its exquisite taste, Choublak Tea is
                  also recognized for its health-promoting properties. Rich in
                  antioxidants and vitamin C, this soothing infusion supports
                  wellness and vitality, making it a favorite choice for those
                  seeking a delicious companion to their daily rituals.
                </p>

                <p>
                  Whether enjoyed piping hot or refreshingly cold, our Choublak
                  Tea is perfect for moments of relaxation, gatherings with
                  loved ones, or as an accent to gourmet experiences. Let each
                  sip transport you to a world where tradition, health, and
                  pleasure blend harmoniously—discover the delightful charm of
                  our Choublak Tea today.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HIGHLIGHTS — three benefit cards
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-6 border-t"
        style={{ background: "#111111", borderColor: "#1f1f1f" }}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="font-sans font-semibold mb-3"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#5a9452",
                }}
              >
                Why Choublak
              </p>
              <h2
                className="font-display font-light text-white"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
              >
                Tradition. Wellness. <em>Delight.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                image: "/images/ruby_red_brew.jpeg",
                title: "Ruby-Red Brew",
                body:
                  "A vibrant hibiscus-red hue and a refreshing, tart taste that dances on the palate.",
              },
              {
                image: "/images/natural_wellness.jpeg",
                title: "Natural Wellness",
                body:
                  "Rich in antioxidants and vitamin C — a soothing infusion that supports vitality.",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div
                  className="border h-full overflow-hidden flex flex-col text-center"
                  style={{ background: "#181818", borderColor: "#262626" }}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3
                      className="font-sans font-semibold text-white mb-3"
                      style={{
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-white/60 leading-relaxed"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — shop the teas
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "#111111" }}
      >
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <h2
              className="font-script text-white mb-5"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Taste the tradition.
            </h2>
            <p
              className="font-sans text-white/60 mb-8 max-w-md mx-auto"
              style={{ fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Discover our teas and bring a touch of heritage to your daily
              ritual.
            </p>
            <Link href="/products" className="btn-green">
              SHOP OUR TEAS
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
