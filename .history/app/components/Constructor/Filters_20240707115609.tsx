import React from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
const Filters = () => {
   return (
      <div className='md:relative absolute opacity-0 md:w-1/3 h-fit bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] relative z-[2] rounded-[32px] p-[32px]'>
         <Select type="select" data={constructorData.filters.types}/>
         <Select type="select" data={constructorData.filters.fonts}/>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
   )
}

export default Filters