import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { NoiseOverlay } from "@/components/noise-overlay";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AetherOS — The Operating System for Thought",
  description:
    "AetherOS is a premium, ambient operating layer for the next generation of computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} bg-obsidian text-ethereal antialiased font-sans overflow-x-hidden`}
      >
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}