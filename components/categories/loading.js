import React from 'react'
import {Skeleton} from '../skeleton'

function  CategoriesLoading() {
  return (
    <div className='h-16 gap-6 flex'> 
        {
        Array(5)
            .fill(null)
            .map((_,index)=>(
                <Skeleton key={index} height={72}/>
                ))
        }
    </div>
  )
}

export {CategoriesLoading}