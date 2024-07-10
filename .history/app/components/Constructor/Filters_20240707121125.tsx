'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
const Filters = () => {
   const [active,setActive]=useState(false)
   return (
      <div className={`${active?'  ':''} top-[80px] w-full xs:top-auto xs:left-auto fixed xs:max-w-[] xs:w-1/2 h-fit xs:bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] xs:relative z-[5] rounded-[32px] p-[32px]`}>
         <Select type="select" data={constructorData.filters.types}/>
         <Select type="select" data={constructorData.filters.fonts}/>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
   )
}

export default Filters