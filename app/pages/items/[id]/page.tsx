'use client'
import Header from '@/app/components/Header'
import ProductCart from '@/app/components/ProductCard'
import { usePathname } from 'next/navigation'

export default function  UserItem() {
  const pathName = usePathname()
  const id = pathName.split('items/')[1]
 
  return (
  <>
    <Header />
    <ProductCart id={`${id}`}/>
  </>
  )
}

