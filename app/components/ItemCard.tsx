/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Product } from "../model/Product";

export default function ItemCard({id}: any){
  const [item, setItem] = useState<Product[]>()

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log(id)
        const res = await fetch(`/api/item/${id}`);
        const data = await res.json()
        setItem(data.res)
      } catch (error) {
        throw new Error("Failed to get Item.");
      }
    }
    fetchItem()
  }, [id])

  return (
    <>
      { item?.map(item => {
        return (
          <div key={item.id} className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={item.img}
              alt="image" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {item.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                Last updated 3 mins ago
              </p>
            </div>
          </div>
      )})}
    </>
  )
}