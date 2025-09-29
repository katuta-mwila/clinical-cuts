import Link from "next/link";

export default function CTA2(){
  return <section className="theme-primary bg-primary-shade py-[120px]">
    <div className="centered-content-full vert-10 items-center">
      <div className="text-center">
        <h1>Book an appointment now</h1>
      </div>
      <Link href="/book" className="button-cta">Book Now</Link>
    </div>
  </section>
}