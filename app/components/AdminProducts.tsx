import Image from "next/image";
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
    <div className='flex flex-col basis-5/6 ml-4 w-6/6'>
      <div className="mb-4"> Products </div>
      <div className="overflow-x-auto">
        <table className="text-center w-5/6 mx-auto border-separate border-spacing-4">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Added Date</th>
            </tr>
          </thead>

          <tbody>
            { products.map((item) => {
              return (
                <tr 
                  key={item.id}
                  className="divide-y divide-slate-300"
                >
                  <td>
                    <Link href={`/pages/admin/${item.id}`}>
                      <Image 
                        src={item.img}
                        alt={item.title}
                        width={50}
                        height={50}
                      />
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td>${item.newPrice}</td>
                  <td>23</td>
                  <td>26-10-2023</td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
        {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
        </div> */}
    </div>
  )
}