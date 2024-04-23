'use client'
import React from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
   
  return (
   <article className='art h-[258px] p-[40px] relative'>
      <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      <h3 className='text-[32px] leading-[1.31]'>
         {item.title}
      </h3>
      <p className='truncateP ' dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>
   </article>
  )
}

export default FastArticle