import { PubImages } from "@/imageData"
import Image from "next/image"

export default function TheWhy(){
  return <section className="pb-section-y md:pt-section-y theme-secondary">
    <SVJesus/>
    <div className="centered-content-full grid-resp-md-2 gap-x-20 gap-y-[35vw]">
      <div className="vert-5 md:order-2">
        <h1>Why We Exist</h1>
        <p className="text-h5">We exist to help people look and feel their best every day. Our passion is crafting personalized styles that boost confidence and express individuality. At our core, we believe a great haircut or grooming session is more than appearance; it’s an experience.</p>
      </div>
      <div className="flex-center md:order-1">
        <div className="fancy-image">
          <Image alt="" src={PubImages.stock.hero_man2.main} className="absolute bottom-0 w-[100%] opacity-100 bg-blue-400/20 clippydoo"/>
          
        </div>
        {/*<div className="theme-primary bg-primary rounded-full aspect-square w-[45%] relative">
          
          <Image alt="" src={PubImages.stock.hero_man2.main} className="absolute bottom-0 w-[99%] opacity-100 bg-blue-400/20 clippydoo"/>
        </div>*/}
      </div>
    </div>
  </section>
}

// arc
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y

function SVJesus(){
  return <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="mask" clipPathUnits="objectBoundingBox">
        <path d="
              M 0,0.5
              A 0.5 0.5 0 0 0 0.5 1
              A 0.5 0.5 0 0 0 1 0.5
              L 1,-1
              L 0,-1
              Z
        "/>
      </clipPath>
    </defs>
  </svg>
}