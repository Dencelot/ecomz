import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastBlock = ({item}:{item:any}) => {
   
  return (
   <article  className={` xl:text-[18px] text-[15px]   relative  m-[16px] text-[var(--black-40)]`}>
      <div className='xl:px-[40px] px-[20px]'>

      </div>
      
      <Image alt={item.title} width={1000} height={632} src={`/img/middle/${item.id}.png`}/>
      
   </article>
  )
}

export default FastBlock