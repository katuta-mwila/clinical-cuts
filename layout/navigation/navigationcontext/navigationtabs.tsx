import Constants from "@/Constants";
import { DesktopTemplateTab, MobileTemplateTab } from "@/layout/navigation/tabdesigns/TemplateTab";
import { ITabDesign, ITab, ISubTab } from "../types";

const rootPath = Constants.rootPath

/*
const desktopTabDesign: ITabDesign = { 
  button: UnderlineButton,
  dropdown: DesktopTemplateTab.dropdown
}*/

const desktopTabDesign = DesktopTemplateTab

const mobileTabDesign: ITabDesign = {
  className: MobileTemplateTab.className,
  button: MobileTemplateTab.button,
  dropdown: MobileTemplateTab.dropdown
}

export function getSubTabPath(tab: ITab, subTab: ISubTab){
  return subTab.pathType == "absolute" ? subTab.href : tab.href + subTab.href 
}

export const navigationTabs: ITab[] = [
  {
    id: "home",
    isIndex: true,
    text: "Home",
    href: rootPath + "/",
    hasDropdown: false,
    desktop: desktopTabDesign,
    mobile: mobileTabDesign,
    subTabs: []
  },
  {
    id: "services",
    text: "Services",
    href: rootPath + "/services",
    hasDropdown: false,
    desktop: desktopTabDesign,
    mobile: mobileTabDesign,
    subTabs: []
  },
  {
    id: "about",
    text: "About",
    href: rootPath + "/about",
    hasDropdown: false,
    desktop: desktopTabDesign,
    mobile: undefined,
    subTabs: []
  },
  /*{
    id: "book",
    text: "Book",
    href: rootPath + "/book",
    hasDropdown: false,
    desktop: desktopTabDesign,
    mobile: undefined,
    subTabs: []
  },*/
]