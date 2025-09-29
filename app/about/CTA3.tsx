import Link from "next/link";

export default function CTA3(){
  return <section className="theme-tertiary bg-black/90 py-[120px]">
    <div className="vert-10 items-center centered-content-full">
      <div className="text-center">
        <h1>Book an appointment now</h1>
      </div>
      <Link href="/book" className="button-cta-2">Book Now</Link>
    </div>
  </section>
}