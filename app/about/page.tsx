import Intro from "./intro";
import Mission from "./mission";
import TheWhy from "./thewhy";

export default function AboutPage(){
  return <>
    <div className="h-nav"/>
    <Intro/>
    <Mission/>
    <TheWhy/>
  </>
}