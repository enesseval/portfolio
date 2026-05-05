"use client";

import { useTranslations } from "next-intl";

const PAD = "clamp(40px, 6.9vw, 133px)";
const PAD_Y = "clamp(48px, 5.2vw, 100px)";

const STACK = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "OpenAI", "LangChain", "Figma",
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/enesseval" },
  { label: "GitHub",   href: "https://github.com/enesseval" },
  { label: "Upwork",   href: "https://www.upwork.com/freelancers/nextjsninja" },
];

export default function AboutSection() {
  const t = useTranslations("aboutMe");

  return (
    <section
      id="about-me"
      className="w-full border-b border-l border-r border-black/10"
    >
      {/* ── Label row ── */}
      <div
        className="border-b border-black/10 flex items-center"
        style={{ padding: `clamp(14px,1.5vw,26px) ${PAD}` }}
      >
        <span
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "#999",
          }}
        >
          {t("label")}
        </span>
      </div>

      {/* ── Main 2-col content ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — identity */}
        <div
          className="border-b lg:border-b-0 border-r border-black/10 flex flex-col justify-between"
          style={{ padding: `${PAD_Y} ${PAD}`, gap: "clamp(32px,3.5vw,56px)" }}
        >
          {/* Name + role */}
          <div className="flex flex-col" style={{ gap: "clamp(6px,0.6vw,12px)" }}>
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "clamp(34px,3.6vw,69px)",
                lineHeight: 1.1,
                color: "#000",
              }}
            >
              {t("name")}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: "clamp(15px,1.15vw,22px)",
                color: "#888",
              }}
            >
              {t("role")}
            </p>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: "clamp(13px,1vw,18px)",
                color: "#555",
              }}
            >
              {t("available")}
            </span>
          </div>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 self-start"
          >
            <span
              className="flex items-center justify-center rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-200 shrink-0"
              style={{ width: 44, height: 44 }}
            >
              <svg
                className="icon-arrow icon-arrow-down w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: "clamp(15px,1.2vw,22px)",
                color: "#000",
              }}
            >
              {t("downloadCv")}
            </span>
          </a>

          {/* Social links */}
          <div className="flex flex-col" style={{ gap: "clamp(8px,0.7vw,13px)" }}>
            {SOCIAL.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 self-start"
              >
                <svg
                  className="w-3 h-3 text-black/30 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <span
                  className="text-black/40 group-hover:text-black transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "clamp(13px,1vw,18px)",
                  }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — bio + stack + services */}
        <div
          className="flex flex-col"
          style={{ padding: `${PAD_Y} ${PAD}`, gap: "clamp(36px,4vw,64px)" }}
        >
          {/* Bio */}
          <div className="flex flex-col" style={{ gap: "clamp(12px,1.2vw,20px)" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: "clamp(16px,1.25vw,24px)",
                lineHeight: 1.65,
                color: "#222",
              }}
            >
              {t("bio")}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: "clamp(14px,1.05vw,20px)",
                lineHeight: 1.65,
                color: "#666",
              }}
            >
              {t("bio2")}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-col" style={{ gap: "clamp(10px,0.9vw,16px)" }}>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "#aaa",
              }}
            >
              {t("stack")}
            </span>
            <div className="flex flex-wrap" style={{ gap: "clamp(6px,0.5vw,10px)" }}>
              {STACK.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontSize: "clamp(11px,0.8vw,14px)",
                    color: "#555",
                    border: "1px solid #e8e8e8",
                    borderRadius: 999,
                    padding: "4px 14px",
                    background: "#fafafa",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col" style={{ gap: "clamp(10px,0.9vw,16px)" }}>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "#aaa",
              }}
            >
              {t("services")}
            </span>
            <div className="flex flex-col" style={{ gap: "clamp(8px,0.7vw,14px)" }}>
              {(["s1", "s2", "s3", "s4"] as const).map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <span
                    className="shrink-0 rounded-full bg-black"
                    style={{ width: 5, height: 5, marginTop: "0.55em" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 300,
                      fontSize: "clamp(14px,1.1vw,21px)",
                      color: "#333",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
