'use client'
import Link from 'next/link'
import React  from 'react'

function Categories({categories}) {
  
  return (
  <>
    <div className='h-16 gap-6 hidden md:flex'>  
        {categories.map((category)=>(
            <Link className='flex w-full h-full rounded-md font-bold shadow items-center  bg-black/[0.7]  justify-center' key={category.id} href={`/${category.id}`}>
                <div className="">{category.name}</div>
            </Link>
        ))}
    </div></>
  )
}
export { CategoriesLoading } from "./loading";
export { Categories }