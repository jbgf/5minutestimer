import type { Metadata, ResolvingMetadata } from "next";
import React from 'react';
import { Inspector } from 'react-dev-inspector'
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
