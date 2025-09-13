import { CompanyLogo } from "@/svgdata";
import Link from "next/link";

export function NavLogo(){
  return <Link href="/" className="flex-panel">
    <CompanyLogo className="w-45 h-45"/>
  </Link>
}