import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import Providers from "@/shared/components/Providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template Next.js",
  description: "Template de proyecto Next.js con Tailwind CSS y TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-50">
        <Header />
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
