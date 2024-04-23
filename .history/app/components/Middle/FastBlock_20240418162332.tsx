import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastBlock = ({item}:{item:any}) => {
   
  return (
   <article  className={` xl:text-[18px] text-[15px]  sm:w-auto w-full relative  m-[16px] text-[var(--black-40)] md:h-[375px] h-[300px]`}>
      <div className='xl:px-[40px] px-[20px] relative z-[2]'>
         <h3 className='xl:text-[32px] sm:text-[26px] text-[20px] sm:leading-[1.31] leading-[1.6] mb-[16px] text-[var(--white-100)]'>
            {item.title}
         </h3>
         <p className={ ` block`} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
      <Image className=' absolute bottom-0 left-0 md:h-[325px] md:w-[512px] sm:h-[200px]  w-auto object-fill max-w-none' alt={item.title} width={1000} height={632} src={`/img/middle/${item.id}.png`}/>
      
   </article>
  )
}

export default FastBlock