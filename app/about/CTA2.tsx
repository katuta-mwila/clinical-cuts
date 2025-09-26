import Link from "next/link";

export default function CTA3(){
  return <section className="theme-tertiary bg-primary-shade w-full h-full py-[120px] vert-10 items-center">
    <div className="text-center">
      <h1>Book an appointment now</h1>
    </div>
    <Link href="/" className="button-cta-2">Book Now</Link>
  </section>
}