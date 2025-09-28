"use client"

import Timeline, { ITimelineEvent, ITimelineProps } from "@/components/Timeline/timeline";
import { PubImages } from "@/imageData";
import { Calendar, Briefcase, GraduationCap, Star, Users, Scissors, MapPin, ThumbsUp, Award } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CTA3 from "./CTA3";

export const sampleTimeline: ITimelineProps = {
  className: undefined,
  alternating: true,
  lineColWidth: '160px',
  verticalGap: '120px',
  DateComponent,
  events: [
    {
      icon: <Bubble Icon={Scissors} />,
      className: undefined,
      title: "Grand Opening in Wellington Harbour",
      date: "2018",
      description: "The company’s very first barbershop opened its doors on Wellington’s bustling harbourfront, introducing a modern grooming space blending traditional barbering with contemporary style.",
      Card,
    },
    {
      icon: <Bubble Icon={ThumbsUp} />,
      className: undefined,
      title: "First 1000 Customers Served",
      date: "2019",
      description: "Within the first year, the Wellington store celebrated its 1000th haircut, establishing a reputation for quality and consistency in the local community.",
      Card,
    },
    {
      icon: <Bubble Icon={Briefcase} />,
      className: undefined,
      title: "Expansion to Auckland Central",
      date: "2021",
      description: "Opened a second, larger location in Auckland Central featuring extended services such as beard design and premium hair treatments, becoming the company’s flagship shop.",
      Card,
    },
    {
      icon: <Bubble Icon={Award} />,
      className: undefined,
      title: "National Barbering Award Winner",
      date: "2023",
      description: "Recognized at the New Zealand Hair & Beauty Awards as 'Best Barbershop Experience,' highlighting the brand’s focus on customer care and craftsmanship.",
      Card,
    },
    {
      icon: <Bubble Icon={MapPin} />,
      className: undefined,
      title: "Christchurch Riverside Store Launch",
      date: "2025",
      description: "Completed the third major milestone with the launch of a new store in Christchurch Riverside, extending the brand’s presence across the country’s key urban hubs.",
      Card,
    },
  ],
};



export default function BarberTimeline(){

  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!isDesktop){
    sampleTimeline.alternating = false
    sampleTimeline.lineColWidth = '80px'
  }else{
    sampleTimeline.alternating = true
    sampleTimeline.lineColWidth = '160px'
  }

  return <section id="parallax-container" className="theme-primary">
    <CTA3/>
    <div className="theme-primary bg-primary/40 py-section-y">
      <div className="centered-content-md vert-20 items-center">
        <div className="bg-white px-12 py-6 shadow-xl rounded-4xl">
          <h1 className="tsc text-center">Our Journey</h1>
        </div>
        
        <Timeline {...sampleTimeline}/>
      </div>
    </div>
    
    
  </section>
}

function Bubble(props: {Icon: React.ElementType}){
  return <div className="bg-accent-1 text-white p-3 border border-black flex-center rounded-full">
    <props.Icon className="w-7 h-7"/>
  </div>
}

function Card(event: ITimelineEvent){
  return <div className="theme-primary shadow-xl-high p-5 rounded-lg vert-1 abc">
    <h5 className="font-bold">{!sampleTimeline.alternating ? `${event.date} - ` : ""}{event.title}</h5>
    <p className="text-tint-dark">{event.description}</p>
  </div>
}

function DateComponent(event: ITimelineEvent){
  if (!sampleTimeline.alternating) return
  return <div className="text-h5 bg-black/45 px-4 py-1 rounded-full text-white">
    {event.date}
  </div>
}