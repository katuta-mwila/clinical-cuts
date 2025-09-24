import CTA2 from "./CTA2";
import Intro from "./intro";
import ServiceList from "./servicelist";

export default function ServicesPage(){
  return <>
    <div className="h-nav"/>
    <Intro/>
    <ServiceList/>
    <CTA2/>
  </>
}