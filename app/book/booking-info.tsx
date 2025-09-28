import Link from "next/link"
import { storeLocations } from "../homesections/Locations"
import { MapPin, Phone } from "lucide-react"
/*
  State that walk ins are a posibility
  Company ph number + email
  ph + address of all three locations
  Button to book
*/

export default function BookingInfo(){
  return <section className="py-section-y relative">
    <Waves/>
    <div className="centered-content-sm text-center vert-10 relative z-10">
      <div className="vert-5">
        <h1>Book a new look today</h1>
        <p className="text-h5 text-tint-dark">Book a slot in one of our three locations and we'll make sure our barbers have you looking fresh asap
        </p>
        <button className="button-cta self-center">Book a Session</button>
      </div>
      <div className="flex-panel gap-8">
        <div className="border-b-2 border-gray-300 grow"></div>
        <div>OR</div>
        <div className="border-b-2 border-gray-300 grow"></div>
      </div>
      <p className="text-h5 text-tint-dark">Contact us directly to book a session or ask any nagging questions about our services</p>
      <div className="text-left vert-8">
        {storeLocations.map(loc =>{
          return <div key={loc.name} className="vert-1">
            <h5>{loc.name}</h5>
            <div className="flex-panel gap-4 text-tint-dark">
              <Phone className="min-h-6 min-w-6"/>
              <p>{loc.ph}</p>
            </div>
            <div className="flex-panel gap-4 text-tint-dark" >
              <MapPin className="min-h-6 min-w-6"/>
              <p>{loc.address}</p>
            </div>
            
            
          </div>
        })}
      </div>
      <p className="text-h5 text-tint-dark">For general enquiries email <Link href="/" className="text-accent-2 underline">admin@clinicalcuts.co.nz</Link></p>
    </div>
  </section>
}

function Waves(){
  return <div className="absolute w-full bottom-0 text-gray-100">
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,225 C 137.2,268.73333333333335 274.4,312.4666666666667 444,277 C 613.6,241.53333333333333 815.5999999999999,126.86666666666667 987,80 C 1158.4,33.13333333333333 1299.2,54.06666666666666 1440,75 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="currentColor" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
  </div>
}