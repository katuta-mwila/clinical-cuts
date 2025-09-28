import clsx from "clsx"
import { Fragment, ReactNode } from "react"

export interface ITimelineEvent{
  icon: ReactNode
  className?: string
  title: string
  date: ReactNode
  description: string
  Card: React.ElementType<ITimelineEvent>
}

export interface ITimelineProps{
  className?: string
  events: ITimelineEvent[]
  DateComponent: React.ElementType<ITimelineEvent>
  alternating?: boolean
  lineThickness?: string
  lineCol?: string
  verticalGap?: string
  lineColWidth?: string
}

export default function Timeline({
  className,
  events,
  alternating = false,
  lineThickness = '1px',
  lineCol = '#000',
  verticalGap = "60px",
  lineColWidth = "100px",
  DateComponent
}: ITimelineProps){
  const intersectionYOffset = 20
  const gridCols = [alternating ? "1fr" : "0", lineColWidth, "1fr"]
  return <div className={clsx("grid w-full gap-y-0")} style={{gridTemplateColumns: gridCols.join(" ")}}>
    {events.map((event, i) =>{
      const isLast = i === events.length - 1
      const showLeft = alternating && (i % 2 !== 0)
      return <Fragment key={event.title}>
        <div className="">
          {showLeft && <EventArea event={event} verticalGap={verticalGap}/>}
        </div>
        
        <div className="min-h-50 relative">

          <div className="absolute abs-center-x" style={{
            height: i === 0 ? `calc(100% - ${px(intersectionYOffset)})` : (isLast ? px(intersectionYOffset) : "100%"),
            top: i === 0 ? px(intersectionYOffset) : '0',
            width: lineThickness,
            background: lineCol
          }}/>
          <div className={clsx("absolute -translate-y-[50%] w-[50%]", !showLeft && "left-[50%]")} style={{
            top: px(intersectionYOffset), 
            height: lineThickness,
            background: lineCol,
          }}/>

          <div className="absolute abs-center-x -translate-y-[50%] bg-red flex-center" style={{top: px(intersectionYOffset)}}>
            {event.icon}
          </div>

          <div className={clsx("absolute -translate-y-[50%]", showLeft && "left-full", !showLeft && "-translate-x-full")} style={{
            top: px(intersectionYOffset)
          }}><DateComponent {...event}/></div>
        
        </div>
        <div>
          {!showLeft && <EventArea event={event} verticalGap={verticalGap}/>}
        </div>
        
      </Fragment>
    })}
  </div>
}

// alternate = false, index even -> show on right grid, don't render left
// alternate = false, index odd -> show on right grid, don't render left
// alternate = true, index even -> show on right grid, do render left
// alternate = true, index off -> show on left grid, do render left

function EventArea(props: {event: ITimelineEvent, verticalGap: string}){
  return <div className="vert-0 h-full">
    {<props.event.Card {...props.event}/>}
    <div style={{height: props.verticalGap}}></div>
  </div>
}

function px(value: number): string {
  return `${value}px`;
}