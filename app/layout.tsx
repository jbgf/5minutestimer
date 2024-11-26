import type { Metadata, ResolvingMetadata } from "next";
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Inter } from "next/font/google";
import "./globals.css";
import { Props } from "./type";
import { generateMetadataFN } from "./server-util";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  return generateMetadataFN({params, searchParams}, parent)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className + ` overflow-x-hidden min-h-screen flex flex-col justify-between`}>
        <AntdRegistry>{children}</AntdRegistry></body>
      <GoogleAnalytics gaId="G-BFQB3H35VP" />
    </html>
  );
}
