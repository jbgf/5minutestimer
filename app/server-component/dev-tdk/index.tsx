"use client";

import { useEffect } from "react";

export default function DevTKD () {
  const isDev = process.env.NODE_ENV === "development"
  
  if (!isDev) return null
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');
  if (mode !== 'tkd') return null
  
  return (
    <div className="absolute top-0 right-0 z-50 bg-gray-400 p-2 ">
      <h1>Dev TDK</h1>
      <p>{`title: ${document.title}`}</p>
      <p>{`description: ${(document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content}`}</p>
    </div>
  )
}