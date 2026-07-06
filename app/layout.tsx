import type { Metadata } from "next";
import { Manrope, Orbitron, Tektur } from "next/font/google";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Aurora",
    template: "%s | Aurora",
  },
  description: "Aurora — AI & Robotics Solutions",
  icons: {
    icon: "/images/aurora-logo.svg",
    apple: "/images/aurora-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${tektur.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black font-sans text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
