'use client'

import { constructorData } from "@/app/data/constructor"
import { useState } from "react"

const Constructor = () => {
   const [filters,setFilters] = useState({
      types:constructorData.filters.types[0],
      types:constructorData.filters.types[0],
      types:constructorData.filters.types[0]
   })
   return (
      <section className='container  pb-[60px] sm:pt-[60px] pt-[60px]'>
         Constructor
      </section>
   )
}

export default Constructor