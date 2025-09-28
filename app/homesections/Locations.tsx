import { BlurImage } from "@/components/MediaComponents/BlurImage"
import QuickMap from "@/components/QuickMap"
import { IBlurSrc, PubImages } from "@/imageData"
import { LocateIcon, MapPin, Phone, UsersRound } from "lucide-react"

interface ILocation{
  name: string
  address: string
  hours: string[]
  mapsLink: string
  staff: string[]
  blurSrc?: IBlurSrc
  ph: string
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const storeLocations: ILocation[] = [
  {
    name: "Wellington Harbour",
    address: "78 Waterfront Rd, Wellington City 6019",
    hours: [
      "9am-7pm",
      "9am-7pm",
      "9am-7pm",
      "9am-7pm",
      "9am-7pm",
      "10am-5pm",
      "12-5pm",
    ],
    mapsLink: "/",
    staff: ["Liam Smith", "Sophie Cunning", "Carlos Alberto", "Ella Rodriguez"],
    blurSrc: PubImages.stock.cuba_street,
    ph: "0800 267 583"
  },
  {
    name: "Auckland Central",
    address: "120 Queen St, Auckland 1010",
    hours: [
      "8am-6pm",
      "8am-6pm",
      "8am-6pm",
      "8am-6pm",
      "8am-6pm",
      "9am-4pm",
      "Closed",
    ],
    mapsLink: "/",
    staff: ["Hannah Lee", "Jack Turner", "Mia Wong"],
    blurSrc: PubImages.stock.storefront,
    ph: "0800 489 222"
  },
  {
    name: "Christchurch Riverside",
    address: "55 River Rd, Christchurch 8011",
    hours: [
      "9am-5pm",
      "9am-5pm",
      "9am-5pm",
      "9am-5pm",
      "9am-5pm",
      "10am-3pm",
      "Closed",
    ],
    mapsLink: "/",
    staff: ["Oliver Brown", "Emily Davis", "Noah Johnson"],
    blurSrc: PubImages.stock.storefront2,
    ph: "0800 301 910"
  }
]

export default function Locations(){
  return <section className="theme-secondary pb-section-y">
    <div className="centered-content-xl vert-0 md:vert-10">
      <h1 className="text-left-md">Locations & Opening Hours</h1>
      <div className="vert-0">
        <QuickMap objects={storeLocations} componentTag={LocationCard}/>
      </div>
    </div>
  </section>
}

function LocationCard(location: ILocation){
  return <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-x-20 lg:border-b-0 border-b-2 border-b-gray-300 lg:pb-0 pb-8">
    <div className="lg:border-b-2 border-b-0 border-b-gray-300 lg:bg-10 pt-10">
      <h3 className="mb-5 text-left-md">{location.name}</h3>
      {/*<BlurImage blurSrc={location.blurSrc} containerClass="w-full aspect-[16/12] shadow-2xl rounded-lg" centerFill/>*/}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
        <div className="shrink-1 grow-100 basis-[280px] vert-5 justify-center">
          <LocationItem Icon={MapPin} title={"Address"} info={location.address}></LocationItem>
          <LocationItem Icon={Phone} title={"Phone Number"} info={location.ph}></LocationItem>
          <LocationItem Icon={UsersRound} title={"Barbers"} info={location.staff.join(", ")}></LocationItem>
          
        </div>
        <div className="vert-1 grow min-w-[200px] shrink-0">
          <h5 className="text-center mb-2">Opening Hours</h5>
          {location.hours.map((hours, i) =>{
            return <div key={i} className="flex-panel text-tint-dark gap-15">
              <div className="grow">{days[i]}</div>
              <div className="text-right">{hours}</div>
            </div>
          })}
        </div>
      </div>
    </div>
    <div className="py-5 flex items-center">
      <BlurImage blurSrc={location.blurSrc} containerClass="w-full aspect-[16/12] shadow-2xl rounded-lg" centerFill/>
    </div>
    
  </div>
}

function LocationItem(props: {Icon, title, info}){
  return <div className="flex-panel gap-5">
    <props.Icon className="min-h-6 min-w-6 text-accent-2"/>
    <div className="vert-0">
      <h6 className="font-bold">{props.title}</h6>
      <p className="text-tint-dark">{props.info}</p>
    </div>
  </div>
}