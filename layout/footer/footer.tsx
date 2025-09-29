import { NavLogo } from "@/components/logos";
import { Facebook, Instagram, Linkedin } from "@/svgdata";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer(){
  const categories = [
    {
      category: "Site Map",
      links: [
        {name: "Home", link: "/"},
        {name: "Services", link: "/services"},
        {name: "About", link: "/about"},
        {name: "Book", link: "/book"},
      ]
    },
    {
      category: "Services",
      links: [
        {name: "Haircuts", link: "/services"},
        {name: "Styling", link: "/services"},
        {name: "Beard & Grooming", link: "/services"},
        {name: "Coloring", link: "/services"},
        {name: "Brows & Lashes", link: "/services"},
      ]
    },
 
  ]

  const socials = [
    {
      link: 'https://www.facebook.com/',
      logo: <Facebook className="h-6 w-6 cursor-pointer hover:text-accent-2"/>
    },
    {
      link: "https://www.instagram.com/",
      logo: <Instagram className="h-6 w-6 cursor-pointer hover:text-accent-2"/>,
    },
    {
      link: "https://www.linkedin.com/",
      logo: <Linkedin className="h-6 w-6 cursor-pointer hover:text-accent-2"/>
    }
  ]

  return <footer className="theme-tertiary md:py-20 py-10">
    <div className="flex-vert centered-content-md gap-10">
      <div className="flex lg:flex-row flex-col gap-x-20 gap-y-10">
        <div>
          <NavLogo/>
        </div>
          <div className="flex gap-x-0 gap-y-5 justify-between flex-wrap grow">
            {categories.map(cat =>{
              return <div key={cat.category} className="flex-vert w-[180px]">
                <div className="flex-vert gap-2">
                  <h5 className="font-bold">{cat.category}</h5>
                  <div className="flex-vert gap-1">
                    {cat.links.map(link =>{
                      return <Link key={link.name} className="text-tint-light hover:text-accent-2 text-sm" href={link.link}>{link.name}</Link>
                    })}
                  </div>
                </div>
              </div>
            })}
            <div className="vert-2 w-[180x]">
              <h5 className="font-bold">Contact Info</h5>
              <div className="horz-2 text-sm text-tint-light">
                <Phone className="min-w-4 w-4 min-h-4 h-4"/>
                <div>
                  <div>Phone</div>
                  <div className="font-bold">0800 267 583</div>
                </div>
              </div>
              <div className="horz-2 text-sm text-tint-light">
                <Mail className="min-w-4 w-4 min-h-4 h-4"/>
                <div>
                  <div>Email</div>
                  <div className="font-bold">admin@clinicalcuts.co.nz</div>
                </div>
              </div>
            </div>
          </div>
      </div> 
      <div className="border-t border-t-gray-400"></div>
      <div className="flex md:flex-row flex-col-reverse gap-x-10 gap-y-5">
        <p className="text-sm grow md:text-start text-center text-tint-light">NOTE: This is a mock website created for practice purposes</p>
        <div className="flex-panel md:justify-start justify-center gap-2 text-2">
          {socials.map(social =>{
            return <Link key={social.link} href={social.link} target="_blank">{social.logo}</Link>
          })}
        </div>
      </div>
    </div>
  </footer>
}