import { data } from '@/app/data/data'
import React from 'react'

const Titles = () => {
   return (
      <section>
         <h1>
            <span className=''>{data.top.title}</span> 
            <span>{data.top.subtitle}</span>
         </h1>
      </section>
   )
}

export default Titles