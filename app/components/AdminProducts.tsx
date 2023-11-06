import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { Product } from "../model/Product";

export default function AdminProduct(){
  const [products, setProducts] = useState<Product[]>([])
  const [ deleteStatus, setDeleteStatus ] = useState("")

  const handleDelete = (value: string) => {
    setDeleteStatus(value)
  }

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
  }, [deleteStatus])
  
  return (
    <div>
      <h1 className="font-extrabold mb-10">List of Products</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            { products.map((item) => {
              return (
                  <div key={item.id} className="p-8 rounded-lg p-3 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
                    <div>Id: {item.id}</div>
                    <div className="mb-2">Title: {item.title}</div>
                    <div className="grid grid-cols-2 space-x-2">
                      <Link href={`/pages/admin/${item.id}`}><Button style="" value="view"/></Link>
                      <Button 
                        style="" 
                        value="Delete" 
                        url={`api/item/${item.id}`}
                        deleteClick={handleDelete}
                      />
                    </div>
                  </div>
              )
            })}
        </div>
    </div>
  )
}