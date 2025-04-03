import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-5 py-5 border-t-2 border-b-2 border-r-2 border-zinc-500 flex items-center justify-between'>
        <img src={val.url} alt=''/>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe