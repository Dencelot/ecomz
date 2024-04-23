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
   <article className='art  p-[40px] relative'>
      <button className={`transition-transform ${active&&'rotate-45'}`} onClick={handleClick}>
         <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      </button>
      <h3 className='text-[32px] leading-[1.31]'>
         {item.title}
      </h3>
      
      {(active&&!loading)&&<p className={ ` truncateP block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>}
      <div className={`grid overflow-hidden transition-all ${active?'grid-rows-[1fr]':'grid-rows-[0fr]'}`}>
         <p className={ ` block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
   </article>
  )
}

export default FastArticle