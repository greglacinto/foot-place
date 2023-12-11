"use client"
import '../styles/items.css';

import Card from "../components/card"

import { Products } from "../data/store";
import { Product } from "../model/Product";
import { useEffect, useState } from "react";
import Link from 'next/link';


const prods: Product[] = Products

export default function Items({ className }: any){
  const [products, setProducts] = useState<Product[]>([])

  console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/items");
        const data = await res.json()
        setProducts(data.objectData)
      } catch (error) {
        throw new Error("Failed to get all products.");
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className={className}>
        { products.map((item:Product, index) => {
          return (
            ( 
              < Card 
                key={ item.id }
                index={ item.id }
                img={ item.img }
                title={ item.title }
                reviews={ item.reviews }
                prevPrice={ item.prevPrice }
                newPrice={ item.newPrice }
              />
            )
          )
        }) }
    </div>
  )
}