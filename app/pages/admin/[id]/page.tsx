'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
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

