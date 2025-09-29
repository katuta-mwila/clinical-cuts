"use client"

import Link from "next/link";
import GenericTab from "../generictab/generictab";
import { navigationTabs } from "../navigationcontext/navigationtabs";

export default function MobileMenu(){
  return <>
    {navigationTabs.map(tab =>{
      if (!tab.mobile) return
      return <GenericTab key={tab.id} tab={tab} navType="mobile"/>
    })}
    <Link href="/book" className="button-cta-light text-lg px-5 py-2 self-start ml-7">Book Now</Link>
  </>
}