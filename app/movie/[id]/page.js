import React from 'react'
import MovieContainer from "@/containers/movie/index"
import { notFound } from 'next/navigation'
import { fetchSingleMovie } from "@/services/movie";
export default async function MoviePage({params, searchParams}) {
    const movieDetail = await fetchSingleMovie(params.id);
        if(!movieDetail){
        notFound()
    }
    if (movieDetail.success === false) {
        notFound();
      }
    
      if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
      }
    
      return <MovieContainer movie={movieDetail} />;
}
