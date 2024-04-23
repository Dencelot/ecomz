import { data } from '@/app/data/data'
import React from 'react'

const Titles = () => {
   return (
      <section className='relative z-[2]'>
         <h1 className='flex flex-col'>
            <span className='topTitle'>{data.top.title}</span> 
            <span className='topSubTitle mt-['>{data.top.subtitle}</span>
         </h1>
      </section>
   )
}

export default Titles