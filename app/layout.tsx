import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://rapidflowdesigns.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RapidFlow Designs | Hardware Schematic & PCB Design",
  description:
    "RapidFlow Designs provides hardware schematic and PCB design services — from electronics architecture through manufacturable layout, delivered as complete design files ready for procurement and prototyping.",
  keywords: [
    "hardware schematic design",
    "electronics engineering",
    "PCB design",
    "PCB layout",
    "hardware engineering",
    "circuit design",
    "electronics design",
    "BOM",
    "PCB design services",
    "schematic design services",
  ],
  openGraph: {
    title: "RapidFlow Designs | Hardware Schematic & PCB Design",
    description:
      "Hardware schematic and PCB design, from electronics architecture through manufacturable layout — delivered as complete design files ready for procurement and prototyping.",
    url: siteUrl,
    siteName: "RapidFlow Designs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidFlow Designs | Hardware Schematic & PCB Design",
    description:
      "Hardware schematic and PCB design, from electronics architecture through manufacturable layout — delivered as complete design files ready for procurement and prototyping.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
