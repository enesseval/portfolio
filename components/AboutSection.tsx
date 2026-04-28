"use client";

import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="w-full bg-white" style={{ padding: "100px 133px" }}>
      <div
        className="mx-auto flex flex-col lg:flex-row items-start justify-between"
        style={{ maxWidth: "1654px", gap: "73px" }}
      >
        <p
          className="text-black flex-1"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: "clamp(22px, 2.08vw, 40px)",
            lineHeight: "1.3",
            maxWidth: "1015px",
          }}
        >
          {t("bio")}
        </p>

        <div className="relative shrink-0 flex flex-col" style={{ width: "487px", minHeight: "180px" }}>
          <p
            className="text-[#616161] text-right"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: "clamp(16px, 1.15vw, 22px)",
              lineHeight: "1.32",
            }}
          >
            {t("secondary")}
          </p>

          <a href="#contact" className="absolute bottom-0 right-0 flex items-center gap-3 group">
            <span
              className="text-black"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: "clamp(18px, 1.56vw, 30px)",
                lineHeight: "1.3",
              }}
            >
              {t("cta")}
            </span>
            <span
              className="flex items-center justify-center rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-200 shrink-0"
              style={{ width: "48px", height: "48px" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
