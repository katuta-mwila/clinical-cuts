import { BlurImage } from "@/components/MediaComponents/BlurImage"
import { PubImages } from "@/imageData"
import clsx from "clsx"

export default function HaircutSlide(){

  const images = [
    PubImages.stock.haircut_woman,
    PubImages.stock.haircut_man3,
    PubImages.stock.haircut_man_cropped
  ]

  return <section className="theme-primary pb-20">
    <div className="md:flex hidden centered-content-full items-center justify-center gap-15">
      {images.map((img, i) =>{
        const className = clsx("aspect-[12/16] overflow-hidden rounded-md shadow-2xl", i == 1 ? "w-[420px]" : "w-[380px]")
        return <BlurImage key={i} alt="" blurSrc={img} containerClass={className} centerFill/>
      })}
    </div>
    <div className="md:hidden flex centered-content-full items-center justify-center gap-15">
      <BlurImage alt="" blurSrc={images[2]} containerClass={clsx("aspect-[16/16] overflow-hidden rounded-md shadow-2xl w-[420px]")} centerFill/>
    </div>
  </section>
}