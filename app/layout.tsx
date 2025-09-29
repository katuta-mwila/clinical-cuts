import { EZFormProvider } from "@/components/EasyForm/Form/EZFormProvider";
import Footer from "@/layout/footer/footer";
import Navigation from "@/layout/navigation/navigation";
import '../styles/base.css';
import "react-multi-carousel/lib/styles.css";
import { NavigationProvider } from "@/layout/navigation/navigationcontext/navigationcontext";
import {Open_Sans} from 'next/font/google'
import Script from "next/script";
import { Metadata } from "next";

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Clinical Cuts",
  description: "Clinical Cuts Services",
  icons: {
    icon: "/images/favicon.jpg"
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${openSans.className}`}>
      <Script data-goatcounter="https://clinicalcuts.goatcounter.com/count"
      async src="//gc.zgo.at/count.js"
      strategy="afterInteractive"></Script>
      <body className="nav-type-fixed">
        <NavigationProvider>
          <EZFormProvider>
            <header className="w-full z-2000 pointer-events-none">
              <Navigation/>
            </header>
            <main className="theme-secondary">
              {children}
            </main>
            <Footer/>
          </EZFormProvider>
        </NavigationProvider>
      </body>
    </html>
  )
}
