import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Ballad of the Broken Shield",
  description: "A post-apocalyptic space western digital storybook experience",
  keywords: ["space western", "digital storybook", "interactive 3D", "sci-fi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        // 👇 CAMBIO AQUÍ: Se eliminó la clase "bg-space-dark"
        className={`${geistSans.variable} ${geistMono.variable} h-full font-mono text-cyan-400 antialiased overflow-hidden`}
      >
        <div className="relative min-h-screen">
          {/* Space Background Layers */}
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          
          {/* Content*/}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}