interface ITimelineEvent {
  year: number
  description: string
}

const businessTimeline: ITimelineEvent[] = [
  {
    year: 2018,
    description: "The flagship location at Wellington Harbour officially opens, quickly becoming a local favorite."
  },
  {
    year: 2020,
    description: "The team grows to over 10 members, introducing advanced training programs to maintain consistency and quality."
  },
  {
    year: 2021,
    description: "The business is recognized with a local award for excellence in community service and barbering."
  },
  {
    year: 2022,
    description: "Expansion continues with the opening of a second store in Auckland Central, marking a milestone in reaching a wider community."
  },
  {
    year: 2025,
    description: "A third store launches at Christchurch Riverside, solidifying the business as one of New Zealand’s leading names in grooming."
  }
]


export default function Timeline(){
  return <section className="theme-primary py-section-y">
    <div className="centered-content-full">
      <h1>Timeline</h1>
    </div>
    
  </section>
}