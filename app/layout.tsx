import type { Metadata } from "next";
import React from 'react';
import { Inspector } from 'react-dev-inspector'
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
  const isDev = process.env.NODE_ENV === "development"

  const Wrapper = isDev ? Inspector : React.Fragment;

  return (
    <html lang="en" className="overflow-x-hidden">
      <Wrapper>
      <body className={inter.className + ` overflow-x-hidden min-h-screen flex flex-col justify-between`}>
      <AntdRegistry>{children}</AntdRegistry></body>
      </Wrapper>
    </html>
  );
}
