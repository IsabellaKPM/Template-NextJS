import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cn } from "@/shared/lib/tailwind";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import Providers from "@/shared/components/Providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      className={ 
        cn(
          "h-full",
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable
        )
      }
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
