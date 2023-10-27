import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function  MoviesSection({title,movies}) {
  return (
    <div className='mt-9'>
        <h3 className='mb-3  text-2xl uppercase'>{title}</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-[320px] gap-6">
            {movies.map((movie)=>(
                    <div className="overflow-hidden rounded-lg relative transition transform ease-in delay-50 shadow-md hover:scale-150 hover:z-10" key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                unoptimized
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                fill
                            />
                        </Link>
                    </div>
                ))}
        </div>
    </div>
  )
}
export { MoviesSectionLoading } from "./loading";
export { MoviesSection }
