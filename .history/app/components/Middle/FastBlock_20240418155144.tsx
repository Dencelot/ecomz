import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
   
  return (
   <article  className={`art xl:text-[18px] text-[15px] xl:p-[40px] p-[20px]  relative  m-[16px]`}>
      <h3 className='xl:text-[32px] sm:text-[26px] text-[20px] sm:leading-[1.31] leading-[1.6] mb-[16px]'>
         {item.title}
      </h3>
      <p className={ ` block`} dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>
      <Image/>
      
   </article>
  )
}

export default FastArticle