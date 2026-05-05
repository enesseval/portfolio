import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-ibm-plex-mono", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], style: ["italic"], weight: ["700"], variable: "--font-cormorant", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://enesseval.com"),

  title: {
    default: "Enes Eval — Creative Developer & Designer",
    template: "%s | Enes Eval",
  },
  description:
    "Creative Developer & Designer specializing in Next.js, React, and TypeScript — crafting clean, high-performance digital experiences.",
  keywords: [
    "Creative Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "UI Design",
    "Portfolio",
    "Enes Eval",
  ],
  authors: [{ name: "Enes Eval", url: "https://enesseval.com" }],
  creator: "Enes Eval",

  alternates: {
    canonical: "https://enesseval.com",
  },

  openGraph: {
    type: "website",
    url: "https://enesseval.com",
    siteName: "Enes Eval",
    title: "Enes Eval — Creative Developer & Designer",
    description:
      "Creative Developer & Designer specializing in Next.js, React, and TypeScript — crafting clean, high-performance digital experiences.",
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enes Eval — Creative Developer & Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Enes Eval — Creative Developer & Designer",
    description:
      "Creative Developer & Designer specializing in Next.js, React, and TypeScript — crafting clean, high-performance digital experiences.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${dmSans.variable} ${ibmPlexMono.variable} ${cormorant.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
