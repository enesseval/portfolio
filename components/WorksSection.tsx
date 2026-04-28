"use client";

import { useTranslations } from "next-intl";

export default function WorksSection() {
  const t = useTranslations("works");

  const projects = [
    {
      id: "p1",
      href: "#",
      bg: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)",
      icon: null,
    },
    {
      id: "p2",
      href: "#",
      bg: "linear-gradient(135deg, #38bdf8 0%, #34d399 100%)",
      icon: null,
    },
    {
      id: "p3",
      href: "#",
      bg: "#000000",
      icon: (
        <svg className="w-36 h-36 text-white/70" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      ),
    },
    {
      id: "p4",
      href: "#",
      bg: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      icon: (
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 80px)",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "-0.02em",
          }}
        >
          Design
        </span>
      ),
    },
  ];

  return (
    <section id="works" className="w-full bg-white" style={{ padding: "100px 133px" }}>
      <div className="mx-auto flex flex-col" style={{ maxWidth: "1654px", gap: "66px" }}>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between" style={{ gap: "10px" }}>
          <h2
            className="text-black leading-none"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "clamp(48px, 5.2vw, 100px)",
              lineHeight: 1.21,
            }}
          >
            {t("heading")}
          </h2>
          <p
            className="text-black md:text-right md:self-end"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.15vw, 22px)",
              lineHeight: "1.32",
              maxWidth: "428px",
            }}
          >
            {t("description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "40px" }}>
          {projects.map((p) => (
            <a key={p.id} href={p.href} className="flex flex-col group" style={{ gap: "29px" }}>
              <div
                className="w-full flex items-center justify-center overflow-hidden"
                style={{
                  aspectRatio: "807 / 470",
                  borderRadius: "42px",
                  background: p.bg,
                }}
              >
                {p.icon}
              </div>

              <div className="flex items-center" style={{ gap: "13px" }}>
                <span
                  className="flex items-center justify-center shrink-0 rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-200"
                  style={{ width: "48px", height: "48px" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
                <span
                  className="text-black"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.08vw, 40px)",
                    lineHeight: 1.2,
                  }}
                >
                  {t(p.id)}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Explore more */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-3 border border-[#AEAEAE] rounded-full hover:border-black transition-colors duration-200"
            style={{ padding: "13px 34px" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "20px" }}>
              {t("explore")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
