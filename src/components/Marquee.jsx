import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    <div className='flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurls.map(url => <img src={url} alt='' className='flex-shrink-0'/> )}
        {imagesurls.map(url => <img src={url} alt='' className='flex-shrink-0'/> )}
    </div>
  )
}

export default Marquee