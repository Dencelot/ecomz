'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
const Filters = () => {
   const [active,setActive]=useState(false)
   return (
      <div className={`${active?' bg-[var(--bazalt-100)] ':'bg-[var(--neon-01)]  sm:pr-[32px] pr-[50px] opacity-0 -translate-x-full'} sm:opacity-1 sm:translate-x-0 sm:transition-none transition-[transform opacity] sm:pt-[32px] pt-[112px] sm:h-auto h-full left-0 top-0  w-full sm:top-auto sm:left-auto fixed sm:w-[47%] md:w-1/3 h-fit sm:bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] sm:relative z-[5] sm:rounded-[32px] p-[32px]`}>
         <Select type="select" data={constructorData.filters.types}/>
         <Select type="select" data={constructorData.filters.fonts}/>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
   )
}

export default Filters