import Image from "next/image";
import '../styles/items.css';

import Card from "../components/card"

import { Products } from "../data/store";
import { Product } from "../model/Product";


const prods: Product[] = Products

export default function Items({ className }: any){

  return (
    <div className={className}>
      { prods.map((item:Product) => (
          < Card 
          key={ item.id }
          img={ item.img }
          title={ item.title }
          star={item.star}
          reviews={ item.reviews }
          prevPrice={ item.prevPrice }
          newPrice={ item.newPrice }
        />
        )) }
    </div>
  )
}