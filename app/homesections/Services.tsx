import { BlurImage } from "@/components/MediaComponents/BlurImage"
import QuickMap from "@/components/QuickMap"
import { IBlurSrc, PubImages } from "@/imageData"
import Link from "next/link"

interface IService{
  name: string
  blurSrc: IBlurSrc
  gridArea
}

export default function Services(){
  const services: IService[] = [
    {
      name: "Haircuts",
      blurSrc: PubImages.stock.haircut,
      gridArea: "one"
    },
    {
      name: "Hair Styling",
      blurSrc: PubImages.stock.hair_dressing,
      gridArea: "two"
    },
    {
      name: "Beard & Grooming",
      blurSrc: PubImages.stock.beard,
      gridArea: "three"
    },
    {
      name: "Hair Dying",
      blurSrc: PubImages.stock.dying,
      gridArea: "four"
    },
    {
      name: "Brows & Lashes",
      blurSrc: PubImages.stock.brow,
      gridArea: "five"
    },
  ]

  return <section className="theme-secondary pb-section-y">
    <div className="centered-content-md vert-10">
      <h1 className="text-center">Services</h1>
      <div className="service-grid">
        <QuickMap objects={services} componentTag={ServiceCard}/>
      </div>
      <Link href="" className="button-cta-2 self-center">Pricing & Details</Link>
    </div>
  </section>
}

function ServiceCard(service: IService){
  return <div className="vert-2" style={{gridArea: service.gridArea}}>
    <h5>{service.name}</h5>
    <BlurImage blurSrc={service.blurSrc} containerClass="w-full h-full shadow-lg rounded-md border border-gray-300" centerFill/>
  </div>
}