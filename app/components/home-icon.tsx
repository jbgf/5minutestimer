'use client'
import { ArrowRightEndOnRectangleIcon, HomeModernIcon } from "@heroicons/react/24/solid";

export default function HomeIcon () {
  return (
    <ArrowRightEndOnRectangleIcon onClick={() => window.open('/', '_blank')} className="w-6  mr-1" />
  )
}