import Link from 'next/link'
import React from 'react'

export default function Movie404() {
  return (
    <div className='h-full flex items-center justify-center flex-col'>
        <h1>We couldn't find the movie you looking for! </h1>
        <Link href="/" className=' text-2xl mt-4 underline'>
            Go home
        </Link>
    </div>
  )
}
