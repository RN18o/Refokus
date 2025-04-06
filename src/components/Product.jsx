import React from 'react'
import Button from './Button'

const Product = ({data,mover,count}) => {
  return (
    <div className='w-full py-5 lg:py-20 h-auto lg:h-[23rem] text-white'>
        <div onMouseEnter={() => {mover(count)}} className='w-full lg:max-w-screen-xl mx-4 lg:mx-auto flex flex-wrap items-center justify-between'>
            <h1 className='text-3xl lg:text-5xl  w-96 capitalize font-semibold'>{data.title}</h1>
           <div className='dets w-full lg:w-1/3 mt-64 lg:mt-0'>
           <p className='text-sm lg:text-lg mb-4'>{data.description}</p>
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