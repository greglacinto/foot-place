import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { Product } from "../model/Product";



export default function AdminProduct(){
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/items");
        const data = await res.json()
        setProducts(data.objectData)
      } catch (error) {
        throw new Error("Failed to get products.");
      }
    }
    fetchProducts()
  }, [])
  
  return (
    <div>
      <h1 className="font-extrabold mb-10">List of Products</h1>
      <div className="w-80 md:w-96 lg:w-96">
        <div className="flex flex-wrap">
          <div className="w-full">
            { products.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col mb-2 rounded-lg p-3 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
                    <div className="flex flex-row space-x-4">
                      <div>Id: {item.id}</div>
                      <div>Title: {item.title}</div>
                    </div>
                    <div>
                      <Link href={`/admin/${item.id}`}><Button style="float-right" value="view"/></Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}