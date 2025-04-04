import React from 'react'
import Button from './Button'

const Product = ({data,mover,count}) => {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
        <div onMouseEnter={() => {mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-semibold'>{data.title}</h1>
           <div className='dets w-1/3'>
           <p className='text-lg mb-4'>{data.description}</p>
           <div className='flex items-center gap-5'>
           {data.live &&  <Button />}
           {data.case &&  <Button  title='Case Study'/>}
           </div>
           </div>
        </div>
        </div>
  )
}

export default Product