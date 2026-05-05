"use client";

import { useTranslations } from "next-intl";
import AboutSection from "./AboutSection";

const PAD = "clamp(40px, 6.9vw, 133px)";
const PAD_Y = "clamp(48px, 5.2vw, 100px)";

function Cell({
  children,
  className = "",
  colSpan = false,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: boolean;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      id={id}
      className={`border-b border-r border-black/10 ${colSpan ? "col-span-full" : ""} ${className}`}
      style={{ padding: `${PAD_Y} ${PAD}`, ...style }}
    >
      {children}
    </div>
  );
}

const projects = [
  {
    id: "p1",
    href: "#",
    bg: "linear-gradient(135deg,#a78bfa 0%,#f472b6 100%)",
    content: null,
  },
  {
    id: "p2",
    href: "#",
    bg: "linear-gradient(135deg,#38bdf8 0%,#34d399 100%)",
    content: null,
  },
  {
    id: "p3",
    href: "#",
    bg: "#000",
    content: (
      <svg
        className="text-white/60"
        style={{ width: "clamp(80px,10vw,180px)", height: "clamp(80px,10vw,180px)" }}
        fill="none"
        stroke="currentColor"
        strokeWidth={0.7}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    id: "p4",
    href: "#",
    bg: "linear-gradient(135deg,#1e293b 0%,#0f172a 100%)",
    content: (
      <span
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 300,
          fontSize: "clamp(40px,5vw,80px)",
          color: "rgba(255,255,255,0.8)",
          letterSpacing: "-0.02em",
        }}
      >
        Design
      </span>
    ),
  },
];

export default function MainGrid() {
  const a = useTranslations("about");
  const w = useTranslations("works");
  const c = useTranslations("contact");

  return (
    <section
      id="about"
      className="w-full border-t border-l border-black/10 grid grid-cols-1 lg:grid-cols-2 bg-white"
    >

      {/* ── Row 1 ── Bio | Secondary + CTA ─────────────────────── */}
      <Cell>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: "clamp(22px,2.08vw,40px)",
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          {a("bio")}
        </p>
      </Cell>

      <Cell className="flex flex-col justify-between gap-12">
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: "clamp(15px,1.15vw,22px)",
            lineHeight: 1.5,
            color: "#616161",
          }}
        >
          {a("secondary")}
        </p>

        {/* CTA — self-end keeps it on the right side */}
        <a href="#contact" className="flex items-center gap-3 group self-end">
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 400,
              fontSize: "clamp(18px,1.56vw,30px)",
              color: "#000",
            }}
          >
            {a("cta")}
          </span>
          <span
            className="flex items-center justify-center rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-200 shrink-0"
            style={{ width: 48, height: 48 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </a>
      </Cell>

      {/* ── Row 2 ── Works heading (+ desc on mobile) | Description (desktop) ── */}
      <Cell id="works" className="flex flex-col justify-between gap-8">
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "clamp(48px,5.2vw,100px)",
            lineHeight: 1.21,
            color: "#000",
          }}
        >
          {w("heading")}
        </h2>
        {/* Description visible only on mobile — merged with heading */}
        <p
          className="lg:hidden"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: "clamp(14px,1.15vw,22px)",
            lineHeight: 1.5,
            color: "#000",
          }}
        >
          {w("description")}
        </p>
      </Cell>

      {/* Description cell — desktop only */}
      <Cell className="hidden lg:flex items-end">
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: "clamp(13px,1.15vw,22px)",
            lineHeight: 1.5,
            color: "#000",
          }}
        >
          {w("description")}
        </p>
      </Cell>

      {/* ── Rows 3-4 ── Projects (placeholder) ─────────────────── */}
      {projects.map((p) => (
        <Cell key={p.id}>
          <div className="flex flex-col gap-5 md:gap-7">
            {/* Placeholder card */}
            <div
              className="w-full flex flex-col items-center justify-center gap-3"
              style={{
                aspectRatio: "807 / 470",
                borderRadius: "clamp(16px,2.2vw,42px)",
                background: "#f5f5f5",
                border: "1.5px dashed #d8d8d8",
              }}
            >
              <svg
                className="text-[#c8c8c8]"
                style={{ width: "clamp(28px,2.5vw,44px)", height: "clamp(28px,2.5vw,44px)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: "clamp(11px,0.9vw,14px)",
                  color: "#c0c0c0",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                {w("soon")}
              </span>
            </div>
            {/* Label */}
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "clamp(16px,2.08vw,40px)",
                color: "#c0c0c0",
                lineHeight: 1.2,
              }}
            >
              {w(p.id)}
            </span>
          </div>
        </Cell>
      ))}

      {/* ── About Me ─────────────────────────────────────────── */}
      <div className="col-span-full">
        <AboutSection />
      </div>

      {/* ── Explore more ──────────────────────────────────────── */}
      <Cell colSpan className="flex justify-center" style={{ padding: "clamp(36px,4.5vw,80px) 0" }}>
        <a href="#" className="group relative inline-flex items-center gap-3 pb-2.5">
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "clamp(18px,1.56vw,30px)",
              color: "#000",
            }}
          >
            {w("explore")}
          </span>
          {/* Arrow — slides right on hover */}
          <svg
            className="group-hover:translate-x-1 transition-transform duration-300"
            style={{ width: "clamp(16px,1.2vw,22px)", height: "clamp(16px,1.2vw,22px)" }}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
          {/* Underline — grows from left on hover */}
          <span className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </a>
      </Cell>

      {/* ── Contact ── redesigned, dark bg ───────────────────── */}
      <Cell
        id="contact"
        colSpan
        style={{ padding: 0, background: "#0f0f0f", marginLeft: "-1px" }}
      >
        <div
          className="flex flex-col"
          style={{ padding: `clamp(60px,7vw,120px) ${PAD}`, gap: "clamp(40px,5vw,80px)" }}
        >
          {/* Tagline */}
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 400,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#555",
            }}
          >
            {c("tagline")}
          </span>

          {/* Heading + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ gap: "clamp(28px,3vw,48px)" }}>
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "clamp(40px,5.5vw,106px)",
                lineHeight: 1.05,
                color: "#fff",
              }}
            >
              {c("heading1")}
              <br />
              {c("heading2")}
            </h2>

            <a
              href="mailto:info@enesseval.com"
              className="group flex items-center gap-4 shrink-0 self-start lg:self-end"
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "clamp(15px,1.15vw,22px)",
                  color: "#fff",
                }}
              >
                {c("cta")}
              </span>
              <span
                className="flex items-center justify-center rounded-full border border-white/30 group-hover:bg-white transition-all duration-200 shrink-0"
                style={{ width: 52, height: 52 }}
              >
                <svg
                  className="w-4 h-4 text-white group-hover:text-black transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </a>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#222" }} />

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-start" style={{ gap: "clamp(24px,3vw,60px)" }}>
            {[
              { label: c("emailLabel"), val: "info@enesseval.com", href: "mailto:info@enesseval.com" },
              { label: c("phoneLabel"), val: "+90 507 665 57 14", href: "tel:+905076655714" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col" style={{ gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "#555",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.label}
                </span>
                <a
                  href={item.href}
                  className="hover:underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "clamp(15px,1.25vw,22px)",
                    color: "#fff",
                  }}
                >
                  {item.val}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Cell>
    </section>
  );
}
