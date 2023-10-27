import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";


function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div>
      <h1 className="text-5xl mb-8 font-semibold">{title}</h1>
      <p className={`font-extralight text-l max-w-prose ${isCompact ? 'line-clamp-2' : ''}`}>
        {overview}
      </p>
      <div className="flex gap-12 my-10 h-10 ">
        <Link
          href={`/movie/${movie.id}`}
          className="w-72 bg-white flex items-center justify-center rounded-full font-bold text-black	"
        >
          Play
        </Link>
        
      </div>
     
      <div className="absolute  max-h-content  md:h-full z-[-2] inset-0">
        
        <Image
          className="object-cover bg-contain opacity-40 absolute object-top"
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}
export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie }