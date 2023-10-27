import React from 'react'
import "./style.css"
function Skeleton({width,height}) {
  return (
    <div className='skeleton' style={{width,height}}> </div>
  )
}

export {Skeleton}