import { PubImages } from "@/imageData"
import Image from "next/image"

export default function TheWhy(){
  return <section className="py-section-y theme-secondary">
    <SVJesus/>
    <div className="centered-content-full grid-resp-md-2">
      <div className="flex-center">
        <div className="fancy-image">
          <Image alt="" src={PubImages.stock.hero_man2.main} className="absolute bottom-0 w-[99%] opacity-100 bg-blue-400/20 clippydoo"/>
          
        </div>
        {/*<div className="theme-primary bg-primary rounded-full aspect-square w-[45%] relative">
          
          <Image alt="" src={PubImages.stock.hero_man2.main} className="absolute bottom-0 w-[99%] opacity-100 bg-blue-400/20 clippydoo"/>
        </div>*/}
      </div>
      <div className="vert-5">
        <h1>Why We Exist</h1>
        <p className="text-h5">Our mission is to provide exceptional hair and grooming services that leave every client feeling confident, refreshed, and empowered. We believe that style is more than appearance, it is a reflection of individuality and self expression. With a skilled team and a commitment to quality, we create an experience that blends creativity, precision, and care.</p>
      </div>
    </div>
  </section>
}

// arc
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y

const InverseSemi = function({className}){
  return <svg className={className} width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
    <path d="
            M -10,0
            L -10,0 0,0 
            A 50 50 0 0 0 50 50
            A 50 50 0 0 0 100 0 
            L 100,50 0,50 
            Z
            " fill="white" />
  </svg>
}

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