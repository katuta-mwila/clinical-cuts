import Link from "next/link";

export default function CTA2(){
  return <section className="theme-primary bg-primary-shade w-full h-full py-[120px] vert-10 items-center">
    <div className="text-center">
      <h1>Book an appointment now</h1>
    </div>
    <Link href="/" className="button-cta">Book Now</Link>
  </section>
}