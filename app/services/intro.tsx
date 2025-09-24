import Image from "next/image";
import { PubImages } from "@/imageData";
import Link from "next/link";

export default function Intro(){
  return <section className="theme-primary">
    <div className="w-full grid grid-cols-2 ">
      <div className="px-[5vw] py-section-y vert-10 justify-center border-b-primary-shade-1 border-b-2">
        <div className="vert-5">
          <h1>Services Tailored To The Needs Of Many</h1>
          <h4 className="text-tint-dark">Take a look and see what services suits you best!</h4>
        </div>
        <Link className="button-cta self-start" href="/book">Get a New Fresh Look</Link>
      </div>
      <div className="">
        <Image alt="" src={PubImages.stock.barbers.main} className="w-full aspect-[16/11] object-cover object-center"/>
      </div>
    </div>
  </section>
}