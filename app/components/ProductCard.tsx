/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { BiBorderRadius, BiCartAdd } from 'react-icons/bi'
import { RiBookMarkFill } from 'react-icons/ri'
import { DiCodeigniter } from 'react-icons/di'
import { useEffect, useState } from "react";

import { Product }  from "../model/Product";
import Button from "./Button";

import  '../styles/ProductCard.css'

type ProductData = {

}

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
  
  // style={{
  //   width: '100%',
  //   height: 'auto',
  // }}

  return (
    <>
    { prodData?.map(item => {
      return (
        <div key={item.id} className='w-full h-full dark:text-black lg:h-screen bg-gray-300 py-4 px-2'>
          <div className='w-full h-full lg:h-4/5 py-4 px-4 flex items-center justify-center'>
            <div className='lg:w-4/5 w-full h-full bg-gray-100 rounded-xl lg:h-4/5 flex flex-col lg:flex-row items-center justify-center shadow-2xl  '>
              <div className="">
                <div className='imageContainer'>
                    <img 
                      src={item?.img} 
                      alt='no image'  
                      className='image'
                    />
                </div>
                </div>
                <div className='lg:w-8/12 w-full px-3 h-full rounded flex flex-col lg:px-5 py-2'>
                    <div className='flex flex-col  lg:flex-row md:justify-between w-full md:h-20 py-2 items-center'>
                        <h1 className='text-3xl font-semibold text-black'>{item?.title}</h1>
                        
                    </div>
                    <p className=' py-2 lg:h-40 w-full'>
                        {item?.title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, blanditiis.
                    </p>
                    <h1 className='text-3xl font-semibold text-black py-2'>{`${item?.newPrice}`}</h1>
                    <div className='w-full py-2 lg:flex-row flex-col flex '>
                        {/* <button onClick={AddToCart} className='btn m-2 lg:w-52 h-10 btn-outline btn-success flex items-center justify-center'> <BiCartAdd className='text-3xl mx-2' /> Add to Cart</button>
                        <button onClick={AddToBookmark} className='btn m-2  lg:w-52 h-10 btn-outline btn-success flex items-center justify-center'> <RiBookMarkFill className='text-3xl mx-2' />Bookmark</button> */}
                         <Button style="mt-2" value="Back"/>
                    </div>

                </div>
            </div>
          </div>
        </div>
    )})}
    </>
  )
}