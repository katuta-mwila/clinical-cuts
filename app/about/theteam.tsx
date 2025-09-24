import QuickMap from "@/components/QuickMap"
import { PubImages } from "@/imageData"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface ITeamMember{
  name: string
  image: StaticImport
  role: string
}

interface ITeamLocation{
  locationName: string
  members: ITeamMember[]
}

const teamLocations: ITeamLocation[] = [
  {
    locationName: "Wellington Harbour",
    members: [
      { name: "Ian Thompson", image: PubImages.stock.teammembers.member1.main, role: "Manager & Barber" },
      { name: "Julia Roberts", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Kevin Taylor", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Laura King", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Mike Anderson", image: PubImages.stock.teammembers.member1.main, role: "Barber" }
    ]
  },
  {
    locationName: "Auckland Central",
    members: [
      { name: "Ethan Davis", image: PubImages.stock.teammembers.member1.main, role: "Manager & Barber" },
      { name: "Fiona Lewis", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "George Martin", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Hannah Wilson", image: PubImages.stock.teammembers.member1.main, role: "Barber" }
    ]
  },
  {
    locationName: "Christchurch Riverside",
    members: [
      { name: "Alice Smith", image: PubImages.stock.teammembers.member1.main, role: "Manager & Barber" },
      { name: "Bob Johnson", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Charlie Brown", image: PubImages.stock.teammembers.member1.main, role: "Barber" },
      { name: "Diana Clarke", image: PubImages.stock.teammembers.member1.main, role: "Barber" }
    ]
  }
];


export default function TheTeam(){
  return <section className="theme-secondary pb-section-y">
    <div className="centered-content-full vert-5">
      <h1 className="text-center">The Stylists</h1>
      <QuickMap objects={teamLocations} componentTag={Team} className="vert-15"/>
    </div>
  </section>
}

export function Team(team: ITeamLocation){
  return <div className="vert-10">
    <div className="vert-5">
      <h2 className="text-center">{team.locationName}</h2>
      <QuickMap objects={team.members} componentTag={MemberCard} className="horz-10 justify-center"/>
    </div>
  </div>
}

export function MemberCard(member: ITeamMember){
  return <div className="">
    <Image alt="" src={member.image} className="object-cc rounded-md w-[250px] aspect-[12/16]"/>
    <div className="p-3 text-center">
      <h6 className="font-bold">{member.role}</h6>
      <h6 className="text-tint-dark">{member.name}</h6>
    </div>
    
  </div>
}