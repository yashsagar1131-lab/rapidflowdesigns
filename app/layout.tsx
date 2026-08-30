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
  title: "RapidFlow Designs | Hardware Product Development & Engineering",
  description:
    "RapidFlow Designs provides hardware product development and engineering support, from electronics architecture and PCB design through prototyping, validation and production.",
  keywords: [
    "hardware product development",
    "electronics engineering",
    "PCB design",
    "PCB development",
    "hardware engineering",
    "embedded systems",
    "prototype development",
    "electronics design",
    "product development",
    "DFM",
    "hardware prototyping",
  ],
  openGraph: {
    title: "RapidFlow Designs | Hardware Product Development & Engineering",
    description:
      "Hardware product development and engineering support, from concept and electronics design through prototyping, validation and production.",
    url: siteUrl,
    siteName: "RapidFlow Designs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidFlow Designs | Hardware Product Development & Engineering",
    description:
      "Hardware product development and engineering support, from concept and electronics design through prototyping, validation and production.",
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
