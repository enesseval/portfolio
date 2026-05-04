"use client";

import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  target?: string;
  hideOnDesktop?: boolean;
  isAvatar?: boolean;
  hoverBg?: string;
  hoverIconColor?: string;
  iconClass?: string;
  icon?: React.ReactNode;
  iconHover?: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "projects",
    label: "Projects",
    href: "#works",
    hideOnDesktop: true,
    hoverBg: "#e0e0e0",
    hoverIconColor: "#000",
    iconClass: "group-hover:-rotate-12 transition-transform duration-300",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "avatar",
    label: "About",
    href: "#about-me",
    isAvatar: true,
    hoverBg: "#fff",
  },
  {
    id: "resume",
    label: "CV",
    href: "/resume.pdf",
    hoverBg: "#e0e0e0",
    hoverIconColor: "#000",
    icon: (
      /* Normal: document icon */
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    iconHover: (
      /* Hover: download arrow icon */
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/enesseval",
    target: "_blank",
    hoverBg: "#0A66C2",
    hoverIconColor: "#fff",
    iconClass: "group-hover:scale-110 transition-transform duration-200",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/enesseval",
    target: "_blank",
    hoverBg: "#1c1c1e",
    hoverIconColor: "#fff",
    iconClass: "group-hover:rotate-12 transition-transform duration-300",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "upwork",
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/nextjsninja",
    target: "_blank",
    hoverBg: "#14a800",
    hoverIconColor: "#fff",
    iconClass: "group-hover:scale-110 transition-transform duration-200",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 012.703 2.703 2.706 2.706 0 01-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 01-2.547 2.548 2.55 2.55 0 01-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    hoverBg: "#1a1a1a",
    hoverIconColor: "#fff",
    iconClass: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    ),
  },
];

export default function FloatingNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      className="flex items-center gap-2 px-4 py-3 rounded-[18px]"
      style={{
        background: "rgba(23,23,23,.35)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {navItems.map((item) => {
        const isHov = hovered === item.id;
        const bg = isHov ? (item.hoverBg ?? "#e0e0e0") : "#D4D4D4";
        const iconColor = isHov ? (item.hoverIconColor ?? "#000") : "#000";

        return (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            title={item.label}
            className={`group relative flex items-center justify-center w-[46px] h-[46px] rounded-full transition-all duration-200${item.hideOnDesktop ? " lg:hidden" : ""}`}
            style={{ background: bg }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Pulsing ring for avatar on hover */}
            {item.isAvatar && isHov && (
              <span className="absolute inset-[-5px] rounded-full border-2 border-white/50 animate-ping pointer-events-none" />
            )}

            {item.isAvatar ? (
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-medium transition-transform duration-200"
                style={{ transform: isHov ? "scale(1.12)" : "scale(1)" }}
              >
                E
              </div>
            ) : (
              <span
                className={`flex items-center justify-center ${item.iconClass ?? ""}`}
                style={{ color: iconColor, transition: "color 0.2s ease" }}
              >
                {/* Icon swap for resume: doc → download */}
                {item.iconHover
                  ? (isHov ? item.iconHover : item.icon)
                  : item.icon}
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
