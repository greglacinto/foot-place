'use client'
import { useState } from "react"
import Header from "@/app/components/Header"
import Menu from "@/app/components/menu"
import AdminProduct from "@/app/components/AdminProducts"
import AddProduct from "@/app/components/AddProduct"

export default function Admin(){
  const [activeLink, setActiveLink] = useState('products')

  const handleState = (buttonClicked: any) => {
    setActiveLink(buttonClicked);
  }

  return (
  <>
    <Header />
    <div className="mx-5 flex flex-row text-slate-950 mt-5">
      <Menu 
        active = { activeLink }
        change = { handleState } 
        className="flex basis-1/6 px-1 ml-2 mt-4 border-r-4"
      />
      {
        activeLink == `products` 
          ? <AdminProduct />
          : activeLink == `add-new`
          ? <AddProduct />
          : <h1>Hello Admin</h1>
      }
    </div>
  </>)
  
}