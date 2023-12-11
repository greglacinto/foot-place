'use client'
import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Items from "./components/Items"
import NavHome from "./components/NavHome"



export default function Home(){
  const [activeLink, setActiveLink] = useState('products')
  const handleState = (buttonClicked: any) => {
    setActiveLink(buttonClicked);
  }
  
  return (
    <>  
      <div className="font-sans font-semibold">
        <Header />
        <div 
          className="mx-5 mx-auto flex flex-row text-slate-950 mt-10"
        >
          <NavHome 
            active = { activeLink }
            change = { handleState } 
            className="flex basis-1/6 px-1 pl-6 mt-4"
          />
          <div className="mx-auto">
            <Items className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"/>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
    )
}