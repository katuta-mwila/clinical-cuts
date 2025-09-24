import CTA from "./homesections/CTA";
import FAQ from "./homesections/FAQ";
import HaircutSlide from "./homesections/HaircutSlide";
import Hero from "./homesections/Hero";
import Locations from "./homesections/Locations";
import Reviews from "./homesections/reviews";
import Services from "./homesections/Services";
import SupportingStatement from "./homesections/supportingstatement";

export default function Home() {
  return <>
    <Hero/>
    <HaircutSlide/>
    <div className="bg-gradient-to-b from-primary to-secondary h-30"></div>
    <Services/>
    <Locations/>
    <CTA/>
    <SupportingStatement/>
    <Reviews/>
    <FAQ/>
  </>
}
