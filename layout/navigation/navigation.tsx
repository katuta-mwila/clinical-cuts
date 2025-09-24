"use client"

import MobileNav from "./mobilenav/mobilenav"
import GenericTab from "./generictab/generictab"
import clsx from "clsx"
import { useNavigationContext } from "./navigationcontext/navigationcontext"
import { NavLogo } from "@/components/logos"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Navigation(){
  const pathname = usePathname()
  const navContext = useNavigationContext()
  const transparent = (pathname == "/" || pathname == "/servsices") && navContext.data.is0Scroll

  return <>
    <nav id="navigation" className={clsx("h-nav partial-fixed", !navContext.data.showNavBar && "hide", (!transparent && navContext.data.showNavBar) && "shadow-lg")}>
       <div className={clsx('h-full theme-primary duration-300', (transparent && !navContext.data.showMobileMenu) && "bg-primary/0")}> 
        <div className="centered-content-md flex h-full justify-between">
          <NavLogo/>
          <div className="flex-panel gap-5">
            <div className="md:flex-panel hidden">
              {navContext.data.tabs.map(tab =>{
                if (!tab.desktop) return
                return <GenericTab key={tab.id} tab={tab} navType="desktop"/>
              })}
            </div>
            <Link href="/book" className="button-cta-light text-lg px-5 py-2">Book Now</Link>
            <MobileNav/>
          </div>
        </div>
      </div>
    </nav>
  </>
}