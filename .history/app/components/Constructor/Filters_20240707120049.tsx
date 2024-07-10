'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
const Filters = () => {
   const [active,setActive]=useState(false)
   return (
      <div className={`${active?'md:top-auto md:left-auto top-[80px] left-0':''}  fixed  md:w-1/3 h-fit md:bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] md:relative z-[5] rounded-[32px] p-[32px]`}>
         <Select type="select" data={constructorData.filters.types}/>
         <Select type="select" data={constructorData.filters.fonts}/>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
   )
}

export default Filters