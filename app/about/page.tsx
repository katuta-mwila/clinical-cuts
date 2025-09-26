import Intro from "./intro";
import Mission from "./mission";
import TheTeam from "./theteam";
import TheWhy from "./thewhy";
import Timeline from "./business-timeline";
import CTA3 from "./CTA2";

export default function AboutPage(){
  return <>
    <div className="h-nav"/>
    <Intro/>
    <Mission/>
    <TheWhy/>
    <TheTeam/>
    <CTA3/>
    <Timeline/>
    
  </>
}