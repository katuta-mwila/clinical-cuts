import { CompanyLogo } from "@/svgdata";
import Link from "next/link";

export function NavLogo(){
  return <Link href="/" className="flex-panel">
    <div className="w-45 min-w-45 h-15 flex-center">
      <CompanyLogo className="w-45 h-45"/>
    </div>
    
  </Link>
}