import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5 minute timer - Boost Your Productivity",
  description: "Discover efficient ways to use a 5 minute timer for boosting productivity and focus. From Pomodoro techniques to quick breaks and meditation, learn how to incorporate short intervals into your daily routine for improved efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ` min-h-screen flex flex-col justify-between`}>{children}</body>
    </html>
  );
}
