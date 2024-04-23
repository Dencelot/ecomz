import { data } from '@/app/data/data'
import React from 'react'

const Titles = () => {
   return (
      <div className='relative z-[2] w-full  sm:w-[60%] flex items-start  sm:px-0 px-[20px] sm:items-center h-full 2xl:pb-[10%] xl:pb-[12.5%] md:pb-[17%] sm:pb-[23%] '>
         <h1 className='flex flex-col'>
            <span className='topTitle'>{data.top.title}</span> 
            <span className='topSubTitle'>{data.top.subtitle}</span>
         </h1>
      </div>
   )
}

export default Titles