'use client'
import React from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
  return (
   <article className='art h-auto flex'>
      <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      <h3 className='text-[32px] leading-[1.31]'>
         {item.title}
      </h3>
      <p className='' dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>
   </article>
  )
}

export default FastArticle