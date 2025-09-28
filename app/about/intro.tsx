import ImageSection from "@/components/MediaComponents/ImageSection";

// text-clamp(3.75rem, 3vw, 2.5rem)

export default function Intro(){
  return <ImageSection src="/images/stock/teamphoto_2.png" className="curved-bottom">
    <div className="theme-tertiary min-h-120 h-full w-full bg-black/80 flex-center py-section-y">
      <div className="centered-content-base vert-5 pb-15">
        <h1 className="text-center font-bold text-shadow-lg text-[clamp(2.5rem,3.5vw,3.75rem)]">A good hairstyle brings confidence, style, and the best version of you.</h1>
        <h5 className="text-tint-light text-center">We understand the importance of looking sharp, which is why our team is dedicated to delivering styles that match your personality and lifestyle.</h5>
      </div>
    </div>
  </ImageSection>
}