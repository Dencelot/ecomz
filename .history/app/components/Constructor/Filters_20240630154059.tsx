import React from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
const Filters = () => {
   return (
      <div className='md:w-1/3 bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] rounded-[32px] p-[32px]'>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
   )
}

export default Filters