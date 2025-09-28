import QuickMap from "@/components/QuickMap";
import { PubImages } from "@/imageData";
import Image, { StaticImageData } from "next/image";

interface SubService {
  name: string;
  price: string;
}

interface ServiceCategory {
  category: string;
  description: string;
  image: StaticImageData
  subService: SubService[];
}

const salonPricing: ServiceCategory[] = [
  {
    category: "Haircuts",
    description: "Precision cuts and personalized styles to keep your hair looking its best.",
    image: PubImages.stock.haircut.main,
    subService: [
      { name: "Basic Haircut", price: "$40" },
      { name: "Fade", price: "$45" },
      { name: "Texturizing", price: "$50" },
      { name: "Fringe Trim", price: "$12" },
      { name: "Skin Fade", price: "$55" },
      { name: "Buzz Cut", price: "$30" }
    ]
  },
  {
    category: "Styling",
    description: "From everyday looks to special occasions, we create styles that suit your personality.",
    image: PubImages.stock.hair_dressing.main,
    subService: [
      { name: "Perm", price: "$120" },
      { name: "Braids", price: "$60" },
      { name: "Slick Back", price: "$45" },
      { name: "Curly", price: "$50" },
      { name: "Straight", price: "$55" },
      { name: "Dreadlocks", price: "$150" }
    ]
  },
  {
    category: "Beard & Grooming",
    description: "Professional beard shaping and grooming to keep you looking sharp and polished.",
    image: PubImages.stock.beard.main,
    subService: [
      { name: "Clean Shave", price: "$30" },
      { name: "Beard Trim", price: "$35" },
      { name: "Beard Styling", price: "$50" },
      { name: "Nose & Ear Trim", price: "$15" },
    ]
  },
  {
    category: "Coloring",
    description: "Expert coloring services to refresh, highlight, or transform your hair.",
    image: PubImages.stock.dying.main,
    subService: [
      { name: "Full Color", price: "$90" },
      { name: "Root Touch", price: "$50" },
      { name: "Highlights", price: "$120" },
      { name: "Balayage", price: "$150" },
      { name: "Toner", price: "$40" }
    ]
  },
  {
    category: "Brows & Lashes",
    description: "Enhance your natural features with professional brow shaping and lash treatments.",
    image: PubImages.stock.brow.main,
    subService: [
      { name: "Brow Shape", price: "$25" },
      { name: "Brow Tint", price: "$30" },
      { name: "Lash Tint", price: "$30" },
      { name: "Lash Lift", price: "$70" },
      { name: "Brow Lamination", price: "$70" },
      { name: "Brow Lash Combo", price: "$90" }
    ]
  }
];



export default function ServiceList(){
  return <section className="theme-secondary py-section-y">
    <div className="centered-content-md vert-10">
      <h1>Services & Pricing</h1>
      <div className="vert-10">
        <QuickMap objects={salonPricing} componentTag={ServiceCard}/>
      </div>
    </div>
  </section>
}

function ServiceCard(service: ServiceCategory){
  return <div className="vert-5">
    <div className="border-b-2 border-b-gray-400 pb-5 vert-1">
      <h3>{service.category}</h3>
    </div>
    <div className="grid md:grid-cols-[minmax(250px,1fr)_3fr] grid-cols-1 gap-x-10 gap-y-10">
      <div className="">
        <Image alt="" src={service.image} className="w-full aspect-[16/12] object-center object-cover rounded-lg shadow-xl"/>
      </div>
      <div className="vert-5">
        <div className="vert-2">
          <h5 className="text-tint-dasrk">{service.description}</h5>
        </div>
        <div className="vert-4">
          {service.subService.map((ss, i) =>{
            return <div key={i} className="flex-panel text-tint-dark">
              <p className="grow pr-10">{ss.name}</p>
              <p className="">{ss.price}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}