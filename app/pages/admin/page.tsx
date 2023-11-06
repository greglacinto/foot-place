'use client'
import { useState } from "react"
import Header from "@/app/components/Header"
import Menu from "@/app/components/menu"
import AdminProduct from "@/app/components/AdminProducts"
import AddProduct from "@/app/components/AddProduct"
import Footer from "@/app/components/Footer"

export default function Admin(){
  const [activeLink, setActiveLink] = useState('products')

  const handleState = (buttonClicked: any) => {
    setActiveLink(buttonClicked);
  }

  return (
  <>
    <Header />
    <div className="flex flex-row">
      <Menu 
        active = { activeLink }
        change = { handleState } 
        className="flex basis-1/6 px-1 border-t-2 bg-foot-red-500"
      />
      <div className="w-full flex basis-5/6 p-5 m-5 mt-10 rounded-md bg-slate-50">
        <div className="mx-auto">
        {
          activeLink == `products` 
            ? <AdminProduct />
            : activeLink == `add-new`
            ? <AddProduct />
            : <h1>Hello Admin</h1>
        }
        </div>
      </div>
    </div>
  </>)
  
}