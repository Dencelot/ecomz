import { data } from '@/app/data/data'
import React from 'react'

const Titles = () => {
   return (
      <section className='relative z-[2] w-1/2 flex items-center h-full 2xl:pb-[15%] pb-[12%]'>
         <h1 className='flex flex-col'>
            <span className='topTitle'>{data.top.title}</span> 
            <span className='topSubTitle'>{data.top.subtitle}</span>
         </h1>
      </section>
   )
}

export default Titles