"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-black relative overflow-hidden" style={{ minHeight: "565px" }}>
      <p
        className="text-white absolute"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 300,
          fontSize: "clamp(32px, 5.2vw, 100px)",
          lineHeight: "1.3",
          top: "57px",
          left: "69px",
        }}
      >
        {t("tagline")}
      </p>

      <a
        href="#"
        aria-label="Back to top"
        className="absolute flex items-center justify-center rounded-full bg-white hover:scale-105 transition-transform duration-300"
        style={{ width: "142px", height: "142px", top: "57px", right: "69px" }}
      >
        <svg
          className="text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          style={{ width: "52px", height: "52px", transform: "rotate(-45deg)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </a>

      <p
        className="text-white absolute whitespace-nowrap"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: "clamp(80px, 15.6vw, 300px)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          bottom: "0px",
          left: "36px",
        }}
      >
        Enes
      </p>
    </footer>
  );
}
