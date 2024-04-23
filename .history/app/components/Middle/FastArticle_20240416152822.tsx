'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
   const [active,setActive] = useState(false)
   const handleClick = () =>{

   }
  return (
   <article className='art h-[258px] p-[40px] relative'>
      <button onClick={handleClick}>

      </button>
      <h3 className='text-[32px] leading-[1.31]'>
         {item.title}
      </h3>
      <p className='truncateP ' dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>
   </article>
  )
}

export default FastArticle