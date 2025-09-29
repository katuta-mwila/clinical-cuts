 import Image from "next/image"
 import { PubImages } from "@/imageData"
import Link from "next/link"
 
 export default function Mission(){
  return <section className="py-section-y theme-secondary">
    <div className="centered-content-full grid-resp-md-2 gap-20">
      <div className="vert-5 justify-center">
        <h1>Mission Statement</h1>
        <p className="text-h5">Our mission is to provide exceptional hair and grooming services that leave every client feeling confident, refreshed, and empowered. We believe that style is more than appearance, it is a reflection of individuality and self expression. With a skilled team and a commitment to quality, we create an experience that blends creativity, precision, and care.</p>
        <Link href="/book" className="button-cta-light self-start">Book Now</Link>
      </div>
      <div className="">
        <Image alt="" src={PubImages.stock.hair_dressing.main} className="object-cc aspect-[16/9] rounded-lg"/>
      </div>
      
    </div>
  </section>
 }