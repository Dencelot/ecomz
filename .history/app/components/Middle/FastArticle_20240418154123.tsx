'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
   const [active,setActive] = useState(false)
   const [loading,setLoading] = useState(true)
   useEffect(()=>{
      setLoading(false)
   },[])
   const handleClick = () =>{
      setActive(!active)
   }
  return (
   <article onClick={handleClick} className={`art xl:text-[18px] text-[15px] xl:p-[40px] p-[20px] pr-[70px] xl: relative cursor-pointer md:min-h-[258px] m-[16px]`}>
      <button className={`transition-transform ${active&&'rotate-45'} absolute top-[20px] right-[20px]`}>
         <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      </button>
      <h3 className='xl:text-[32px] sm:text-[26px] text-[20px] sm:leading-[1.31] leading-[1.6] mb-[16px]'>
         {item.title}
      </h3>
      <p className={ ` block ${!active&&'truncateP'}`} dangerouslySetInnerHTML={createMarkup(item.descrMin)}>
      </p>
      <div className={`grid overflow-hidden transition-all ${active?'grid-rows-[1fr]':'grid-rows-[0fr]'}`}>
         <p className={ ` block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
   </article>
  )
}

export default FastArticle