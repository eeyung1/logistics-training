import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { siteMeta } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logistics-training-six.vercel.app"),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: [
    "delivery coordination",
    "logistics business Nigeria",
    "Solution Virtues Logistics",
    "Chinedu Aniakor",
    "dispatch agency",
    "earn from delivery Lagos",
    "zero capital business",
    "dispatch rider network",
    "e-commerce logistics training",
  ],
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.siteName,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1d40",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
