'use client'
import Button from '@/app/components/Button'
import Header from '@/app/components/Header'
import ItemCard from '@/app/components/ItemCard'
import ProductCart from '@/app/components/ProductCard'
import { usePathname } from 'next/navigation'

export default function  AdminItem() {
  const pathName = usePathname()
  const id = pathName.split('admin/')[1]
 
  return (
  <>
    <Header />
    <div className=''>
        {/* <ItemCard id={`${id}`}/> */}
        <ProductCart id={`${id}`}/>
    </div>
  </>
  )
}

