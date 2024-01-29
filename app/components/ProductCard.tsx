import Image from "next/image";
import { useEffect, useState } from "react";

import { Product }  from "../model/Product";
import Button from "./Button";

import  '../styles/ProductCard.css'


export default function ProductCart({id}: any){

  const [prodData, setprodData] = useState<Product[]>();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log(id)
        const res = await fetch(`/api/item/${id}`);
        const data = await res.json()
        console.log(data.res)
        setprodData(data.res)
      } catch (error) {
        throw new Error("Failed to get Item.");
      }
    }
    fetchItem()
  }, [id])

  return (
    <>
    { prodData?.map(item => {
      return (
        <div key={item.id} className='bg-white w-full px-20 py-10 mt-10'>
          <div className='rounded-xl items-center justify-center shadow-2xl
            grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
              <div>
                  <Image 
                    priority={true}
                    src={item.img} 
                    alt={item.title}
                    width={500}
                    height={500}
                  />
              </div>
              <div className='lg:w-8/12 w-full px-3 h-full rounded flex flex-col lg:px-5'>
                  <div className='flex flex-col  lg:flex-row md:justify-between w-full md:h-20 py-2 items-center'>
                      <h1 className='text-3xl font-semibold text-black'>{item?.title}</h1>
                  </div>
                  <p className=' py-2 lg:h-40 w-full'>
                      {item?.title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, blanditiis.
                  </p>
                  <h1 className='text-3xl font-semibold text-black py-2'>${`${item?.newPrice}`}</h1>
                  <div className='w-full py-2 lg:flex-row flex-col flex '>
                      <Button style="mt-2" value="Back"/>
                  </div>
              </div>
          </div>
        </div>
    )})}
    </>
  )
}