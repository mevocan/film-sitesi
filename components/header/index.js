'use client'
import Link from 'next/link'
import {FaPlayCircle} from "react-icons/fa"
export default function Header() {

  return (
    <header className=" flex-none p-5">
      <div className="flex - tracking-widest items-center justify-between">
        <Link href="/" className="flex  items-center gap-0.5 text-xl font-bold">
          <FaPlayCircle className='m-1'/>  HDFİLMCEHHENEMİ
        </Link>
        
        <nav
          className={`sm:flex md:items-center hidden space-x-4 md:justify-between`}
        >
        </nav>
      </div>
    </header>
  )
}
