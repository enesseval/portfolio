"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import FloatingNav from "./FloatingNav";

export default function HeroSection() {
  const t = useTranslations("hero");

  const copy1Ref  = useRef<HTMLSpanElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const measure = () => {
      if (copy1Ref.current && trackRef.current) {
        const w = copy1Ref.current.scrollWidth;
        trackRef.current.style.setProperty("--shift", `-${w}px`);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/*
        position:fixed anchors this layer to the physical viewport on iOS,
        so it covers the safe area (notch / Dynamic Island) regardless of
        where the document flow starts.  Hidden once the hero scrolls away.
      */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, display: heroVisible ? "block" : "none" }}
      >
        <Image
          src="/medwadw.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.80) 100%)",
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      <section
        ref={sectionRef}
        className="relative w-full flex flex-col"
        style={{ minHeight: "100dvh", overflowX: "clip" }}
      >

        {/* Top header */}
        <div
          className="relative flex items-start justify-between w-full"
          style={{
            zIndex: 10,
            paddingTop: "calc(37px + env(safe-area-inset-top))",
            paddingLeft: "clamp(12px, 1vw, 32px)",
            paddingRight: "clamp(12px, 1vw, 32px)",
            paddingBottom: 0,
          }}
        >
          <span
            className="text-white shrink-0 text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.04vw, 20px)",
              lineHeight: "24px",
            }}
          >
            @ Code by{" "}
            <a
              href="mailto:info@enesseval.com"
              className="name-gradient"
              style={{ fontSize: "clamp(26px, 2.2vw, 42px)", lineHeight: 1 }}
            >
              Enes
            </a>
          </span>

          <p
            className="text-white/75 text-right"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(11px, 1.04vw, 20px)",
              lineHeight: "1.55",
              maxWidth: "clamp(160px, 31vw, 600px)",
            }}
          >
            {t("tagline")}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* ── Arrow button — desktop only, goes to #works ── */}
        <a
          href="#works"
          aria-label="View works"
          className="arrow-btn absolute lg:flex hidden items-center justify-center rounded-full border border-white/50 transition-all duration-300 group hover:border-white hover:bg-white/5"
          style={{
            zIndex: 10,
            right: "clamp(24px, 2.9vw, 56px)",
            top: "38%",
            width: "clamp(100px, 7.3vw, 141px)",
            height: "clamp(100px, 7.3vw, 141px)",
          }}
        >
          <svg
            className="arrow-icon text-white relative z-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            style={{ width: "clamp(22px, 1.9vw, 36px)", height: "clamp(22px, 1.9vw, 36px)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>

        {/* ── Marquee ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ zIndex: 10, paddingBottom: "calc(clamp(60px, 8vw, 96px) + env(safe-area-inset-bottom))" }}
        >
          <div
            ref={trackRef}
            className="animate-marquee"
            style={{ display: "flex", width: "max-content" }}
          >
            <span
              ref={copy1Ref}
              className="text-white shrink-0 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "clamp(52px, 15.6vw, 300px)",
                lineHeight: 1.21,
                paddingRight: "80px",
              }}
            >
              {t("marquee")}&nbsp;&nbsp;✦
            </span>
            <span
              aria-hidden
              className="text-white shrink-0 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "clamp(52px, 15.6vw, 300px)",
                lineHeight: 1.21,
                paddingRight: "80px",
              }}
            >
              {t("marquee")}&nbsp;&nbsp;✦
            </span>
          </div>
        </div>

        {/* Floating nav */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ zIndex: 20, bottom: "calc(clamp(14px, 2vw, 28px) + env(safe-area-inset-bottom))" }}
        >
          <FloatingNav />
        </div>
      </section>
    </>
  );
}
