'use client'
import { useState } from "react"
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
      <Header />
      <div 
        className="flex flex-row"
      >
        <NavHome 
          active = { activeLink }
          change = { handleState } 
          className="flex basis-1/6 px-1 border-t-2 bg-foot-red-500"
        />
        <div className="space-x-4 mx-auto mt-10">
          <Items className="flex"/>
        </div>
      </div>
      
    </>
    )
}