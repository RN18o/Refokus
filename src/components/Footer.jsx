import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-52'>
            <div className='basis-1/2'>
            <h1 className='text-[10rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h1 className='mb-4'>Socials</h1>
               { ["instagram","Twitter (x?)", "LinkedIn",].map((item,index) => <a className='block mt-3 capitalize text-zinc-600'>{item}</a> )}
            </div>
            <div className='basis-1/3'>
                <h1 className='mb-4'>Sitemap</h1>
               { ["Home","Work", "Careers","contact"].map((item,index) => <a className='block mt-3 capitalize text-zinc-600'>{item}</a> )}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
                <p>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <img src='https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg' alt='' className='w-36 mt-16'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer