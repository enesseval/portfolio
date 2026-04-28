"use client";

import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="w-full bg-white relative" style={{ padding: "66px 133px" }}>
      <div className="mx-auto flex flex-col" style={{ maxWidth: "1654px", gap: "113px" }}>

        {/* Heading */}
        <div className="flex flex-col">
          <span
            className="text-black"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}
          >
            {t("tagline")}
          </span>
          <h2
            className="text-black"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "clamp(36px, 4vw, 77px)",
              lineHeight: "1.21",
              marginTop: "4px",
            }}
          >
            {t("heading1")}
            <br />
            {t("heading2")}
          </h2>
        </div>

        {/* Divider + CTA + contacts */}
        <div className="flex flex-col">
          <div className="relative" style={{ height: "140px" }}>
            <div className="absolute left-0 right-0 bg-black" style={{ top: "70px", height: "1px" }} />
            <a
              href="mailto:your.email@gmail.com"
              className="absolute flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
              style={{ right: 0, top: 0, width: "140px", height: "140px", background: "#455CE9" }}
            >
              <span
                className="text-white text-center"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "clamp(16px, 1.25vw, 24px)", lineHeight: "1.2" }}
              >
                {t("cta")}
              </span>
            </a>
          </div>

          <div className="flex flex-row items-start" style={{ gap: "57px", marginTop: "24px" }}>
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", color: "#7E7E7E" }}>
                {t("emailLabel")}
              </span>
              <a
                href="mailto:your.email@gmail.com"
                className="text-black hover:underline underline-offset-2"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "clamp(16px, 1.25vw, 24px)" }}
              >
                your.email@gmail.com
              </a>
            </div>
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", color: "#7E7E7E" }}>
                {t("phoneLabel")}
              </span>
              <a
                href="tel:+905555555555"
                className="text-black hover:underline underline-offset-2"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "clamp(16px, 1.25vw, 24px)" }}
              >
                (+90) 555 555 55 55
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
