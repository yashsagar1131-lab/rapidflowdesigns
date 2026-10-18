import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://rapidflowdesigns.com";
const title = "RapidFlow Designs | AI Development & Implementation";
const description =
  "RapidFlow Designs designs, builds and runs AI systems — assistants, agents and automations — that connect to the tools your business already uses. Start with one workflow and keep everything we build.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "AI development",
    "AI implementation",
    "AI agents",
    "AI automation",
    "workflow automation",
    "LLM integration",
    "RAG",
    "AI consulting",
    "custom AI solutions",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "RapidFlow Designs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">{children}</body>
    </html>
  );
}
