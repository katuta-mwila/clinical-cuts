"use client"

import { PubImages } from "@/imageData";
import Link from "next/link";
import Image from "next/image";
import { BlurImage } from "@/components/MediaComponents/BlurImage";


export default function Hero(){
  return <section className="pt-match-nav theme-primary relative min-h-[60vh] vert-20 pb-30">
    <div className="centered-content-sm text-center vert-10 items-center pt-20">
      <div className="vert-5">
        <h1 className="centered-content-sm font-bold text-[clamp(3.5rem,5vw,5rem)] text-shadow-lg leading-tight">
          Styled To{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-[pulse2_6s_ease-in-out_infinite]">
            Perfection
          </span>{" "}
          Cut to{" "}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-[pulse2_6s_ease-in-out_infinite] delay-3000">
            Precision
          </span>
        </h1>
        <h4>Haircuts for everyone, no matter the background, no matter the hair</h4>
      </div>
      <Link href="" className="button-cta">Book a Session</Link>
    </div>
    <div className="absolute rounded-full w-60 h-60 overflow-hidden right-35 top-35 bg-white p-2 shadow-xl-high">
      <BlurImage alt="" blurSrc={PubImages.stock.cleancut} containerClass="rounded-full w-full h-full bg-white p-5" centerFill/>
    </div>
    <BlurImage alt="" blurSrc={PubImages.stock.clipper} containerClass="absolute w-100 top-20 left-0 p-5 -rotate-30"/>
  </section>
}
