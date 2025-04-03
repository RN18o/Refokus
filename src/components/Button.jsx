import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full text-center flex items-center justify-center gap-2'>
        <span className='text-sm font-semibold'>{title}</span>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button