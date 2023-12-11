'use client'
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

import Header from '@/app/components/Header'
import MyForm from "@/app/components/form";
import { Product } from "../../../model/Product";


const styles = {
  divFrame: `rounded-md border-2  basis-1/2 flex justify-center items-center bg-white`
}

export default function  AdminItem() {
  const router = useRouter()
  const pathName = usePathname()
  const id = pathName.split('admin/')[1]
  
  return (
  <>
    <Header />
    <div className="bg-off">
        <button 
        className="ml-4 my-4"
        onClick={()=> {router.back()}}
        >
          <FaArrowLeft />
        </button>
        <div className='flex flex-col md:flex-row px-4 md:space-x-2 space-x-0 md:space-y-0 space-y-2 pb-5'>
            <div className={`${styles.divFrame}`}>X</div>
            <div className={`${styles.divFrame}`}> 
              <MyForm 
                id = {id}
              />
            </div>
        </div>
    </div>
    
  </>
  )
}

