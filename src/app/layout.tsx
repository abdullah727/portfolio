import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { yearsOfExperienceLabel } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Saud — Senior Frontend Engineer",
  description:
    `Senior Frontend Engineer with ${yearsOfExperienceLabel} years building fast, scalable React and Next.js applications. Based in Lahore, available remote worldwide.`,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Abdullah Saud",
    "Senior Engineer",
    "UI Engineering",
  ],
  authors: [{ name: "Abdullah Saud" }],
  openGraph: {
    title: "Abdullah Saud — Senior Frontend Engineer",
    description:
      `${yearsOfExperienceLabel} years building high-performance web products. React, Next.js, TypeScript specialist.`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Saud — Senior Frontend Engineer",
    description:
      `${yearsOfExperienceLabel} years building high-performance web products. React, Next.js, TypeScript specialist.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
