import { PubImages } from "@/imageData";
import Image from "next/image";
import Link from "next/link";

export default function SupportingStatement(){
  return <section className="theme-primary">
    <div className="grid-resp-md-2 gap-x-10 centered-content-full">
      <div className="vert-5 justify-center py-section-y">
        <h1>Your Hair Our Care</h1>
        <p className="text-tint-dark text-h5">Every detail is crafted with the highest standards in mind, ensuring hair that looks vibrant, healthy, and effortlessly polished. The team’s expertise, professional qualifications, and dedication combine to deliver consistently outstanding results, reflecting a collective commitment to excellence. Each stylist brings skill, care, and artistry to every strand, making quality the defining hallmark of every visit.</p>
        <Link className="button-cta-light self-start" href="/">Learn More</Link>
      </div>
      <div className="flex-center py-10">
        <div className="max-w-full w-120">
          <Image alt="" className="w-full h-auto" src={PubImages.stock.illustration.main}/>
        </div>
        
      </div>
    </div>
  </section>
}