import { data } from '@/app/data/data'
import React from 'react'

const Titles = () => {
   return (
      <section className='relative z-[2] w-full sm:w-1/2 flex items-start sm:items-center h-full 2xl:pb-[15%] xl:pb-[12.5%] sm:pb-[19%]'>
         <h1 className='flex flex-col'>
            <span className='topTitle'>{data.top.title}</span> 
            <span className='topSubTitle'>{data.top.subtitle}</span>
         </h1>
      </section>
   )
}

export default Titles