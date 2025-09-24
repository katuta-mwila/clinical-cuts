import Intro from "./intro";
import Mission from "./mission";
import TheTeam from "./theteam";
import TheWhy from "./thewhy";
import Timeline from "./timeline/timeline";

export default function AboutPage(){
  return <>
    <div className="h-nav"/>
    <Intro/>
    <Mission/>
    <TheWhy/>
    <TheTeam/>
    <Timeline/>
  </>
}