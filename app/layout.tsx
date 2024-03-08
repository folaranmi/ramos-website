import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { urbanist } from "@/constant/fonts";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Ramos Website",
  description: "Ramos website by Folaranmi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
