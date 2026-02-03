import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEO Pay — Криптоплатежи для бизнеса",
  description:
    "Принимайте криптовалюту быстро и безопасно: платёжные шлюзы, аналитика и клиентские решения для бизнеса любого масштаба.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "NEO Pay — Криптоплатежи для бизнеса",
    description:
      "Принимайте криптовалюту быстро и безопасно: платёжные шлюзы, аналитика и клиентские решения для бизнеса любого масш+таба.",
    siteName: "NEO Pay",
    type: "website",
    locale: "ru_RU",
    url: "https://your-domain.example",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEO Pay — Криптоплатежи для бизнеса",
    description:
      "Принимайте криптовалюту быстро и безопасно: платёжные шлюзы, аналитика и клиентские решения для бизнеса любого масштаба.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
