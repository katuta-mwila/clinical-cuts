"use client"

import { PubImages } from "@/imageData";
import Link from "next/link";
import Image from "next/image";
import { BlurImage } from "@/components/MediaComponents/BlurImage";


export default function Hero(){
  return <section className="pt-match-nav theme-primary relative min-h-[60vh] vert-20 pb-30">
    <div className="w-full relative">
      <div className="centered-content-sm text-center vert-10 items-center pt-35">
        <div className="vert-5 relative">
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
          {/*<div className="absolute rounded-full w-[15vw] aspect-square overflow-hidden right-0 top-0 translate-x-full bg-white p-2 shadow-xl-high">
            <BlurImage alt="" blurSrc={PubImages.stock.cleancut} containerClass="rounded-full w-full h-full bg-white p-5" centerFill/>
          </div>
          {/*<BlurImage alt="" blurSrc={PubImages.stock.clipper} containerClass="absolute w-100 top-20 left-0 p-5 -rotate-30"/>*/}
        </div>
        <div className="relative self-stretch flex justify-center">
          <Link href="/book" className="button-cta">Book a Session</Link>
        </div>
        <div className="lg:block hidden absolute rounded-full w-[15vw] min-w-[70px] aspect-square overflow-hidden right-[1vw] top-[var(--height-nav)] bg-white p-[0.6vw] shadow-xl-high">
          <BlurImage alt="" blurSrc={PubImages.stock.cleancut} containerClass="rounded-full w-full h-full bg-white p-5" centerFill/>
        </div>
      </div>
      <BlurImage alt="" blurSrc={PubImages.stock.clipper} containerClass="absolute lg:w-[20vw] w-[15vw] min-w-[150px] aspect-square top-0 left-[50%] md:left-0 md:-translate-x-0 -translate-x-[50%] p-5 -rotate-30"/>
    </div>
    
  </section>
}
