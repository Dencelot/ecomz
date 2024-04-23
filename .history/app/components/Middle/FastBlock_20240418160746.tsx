import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastBlock = ({item}:{item:any}) => {
   
  return (
   <article  className={` xl:text-[18px] text-[15px]   relative  m-[16px] text-[var(--black-40)]`}>
      <div className='xl:px-[40px] px-[20px]'>
         <h3 className='xl:text-[32px] sm:text-[26px] text-[20px] sm:leading-[1.31] leading-[1.6] mb-[16px] text-[var(--white-100)]'>
            {item.title}
         </h3>
         <p className={ ` block`} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
      <Image className='mt-[-20px] mr-[' alt={item.title} width={1000} height={632} src={`/img/middle/${item.id}.png`}/>
      
   </article>
  )
}

export default FastBlock