'use client'

import { constructorData } from "@/app/data/constructor"
import { useState } from "react"

const Constructor = () => {
   const [filters,setFilters] = useState({
      types:constructorData.filters.types[0],
      fonts:constructorData.filters.types[0],
      colors:constructorData.filters.types[0]
   })
   return (
      <section className='container  pb-[60px] sm:pt-[60px] pt-[60px]'>
         {filters.types.ter}
      </section>
   )
}

export default Constructor