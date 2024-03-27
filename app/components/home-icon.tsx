'use client'
import { ArrowRightEndOnRectangleIcon, HomeModernIcon } from "@heroicons/react/24/solid";

export default function HomeIcon () {
  return (
    <ArrowRightEndOnRectangleIcon /* onClick={() => window.open(props?.url ?? '/', '_blank')} */ className="w-6  mr-1 hover:-translate-y-1 transition duration-150 ease-out hover:ease-in"  />
  )
}