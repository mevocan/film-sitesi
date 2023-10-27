'use client'
import Link from 'next/link'
import React from 'react'

export default function Movie404() {
  return (
    <div className='h-full flex items-center justify-center flex-col'>
        <h1>An error has occurred. Sorry for that! </h1>
        <Link href="/" className=' text-2xl mt-4 underline'>
            Go home
        </Link>
    </div>
  )
}