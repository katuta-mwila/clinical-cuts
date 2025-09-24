import ImageSection from "@/components/MediaComponents/ImageSection";
import Link from "next/link";

export default function CTA(){
  return <ImageSection src="/images/stock/salon.jpg" className="">
    <div className="w-full h-full bg-black/70 py-[120px] vert-10 items-center text-white">
      <div className="text-center">
        <h1 >Ready for a new look? </h1>
        <h1>Book your appointment today</h1>
      </div>
      <Link href="/" className="button-cta-2">Book Now</Link>
    </div>
  </ImageSection>
}