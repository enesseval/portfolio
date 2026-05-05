"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="w-full bg-black relative overflow-hidden"
      style={{
        minHeight: "clamp(260px, 40vw, 565px)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* ── Top row: tagline + back-to-top circle ── */}
      <div
        className="flex items-start justify-between"
        style={{ padding: "clamp(28px,4vw,57px) clamp(20px,3.6vw,69px)" }}
      >
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: "clamp(18px,3.5vw,67px)",
            lineHeight: 1.3,
            maxWidth: "60%",
          }}
        >
          {t("tagline")}
        </p>

        <a
          href="#"
          aria-label="Back to top"
          className="group flex items-center justify-center rounded-full bg-white shrink-0"
          style={{
            width: "clamp(64px,7.4vw,142px)",
            height: "clamp(64px,7.4vw,142px)",
          }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <svg
            className="icon-arrow text-black -rotate-45"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            style={{
              width: "clamp(22px,2.7vw,52px)",
              height: "clamp(22px,2.7vw,52px)",
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>

      {/* ── Large "Enes" at the bottom ── */}
      <p
        className="text-white absolute whitespace-nowrap"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: "clamp(72px,15.6vw,300px)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          bottom: 0,
          left: "clamp(16px,1.875vw,36px)",
        }}
      >
        Enes
      </p>
    </footer>
  );
}
