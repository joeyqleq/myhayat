import type { Metadata } from "next";
import { Inter, Barrio } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barrio",
});

export const metadata: Metadata = {
  title: "My Hayat AI - Your Mental Health Companion",
  description: "The first AI-powered mental health chatbot in Lebanese Arabic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${barrio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
