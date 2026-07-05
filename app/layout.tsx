import type { Metadata } from "next";
import { Zen_Old_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";

// Serif display face — used for headings and Japanese kanji accents.
const zenMincho = Zen_Old_Mincho({
  variable: "--font-zen-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Humanist sans — used for body copy and UI.
const zenGothic = Zen_Kaku_Gothic_New({
  variable: "--font-zen-gothic",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "St Monica · 聖モニカ ケアホーム | 鎌倉の住宅型ケアホーム",
  description:
    "St Monica is a small residential care home in Kamakura where warmth, dignity, and calm come first — a place families trust and residents call home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zenMincho.variable} ${zenGothic.variable}`}>
      <body className="bg-cream font-gothic text-ink">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
