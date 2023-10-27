import { CategoriesLoading } from '@/components/categories/loading'
import { FeatureMovieLoading } from '@/components/featured-movie/loading'
import { MoviesSectionLoading } from '@/components/movies-sections/loading'
import React from 'react'



export default async function HomeLoading() {

  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  )
}
