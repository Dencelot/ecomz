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
   <article onClick={handleClick} className='art  p-[40px] relative cursor-pointer'>
      <button className={`transition-transform ${active&&'rotate-45'}`}>
         <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      </button>
      <h3 className='text-[32px] leading-[1.31]'>
         {item.title}
      </h3>
      
      {!loading&&<p className={ `${active?'opacity-0 absolute bottom-0 dela':''} transition-all truncateP block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
      </p>}
      <div className={`grid overflow-hidden transition-all ${active?'grid-rows-[1fr]':'grid-rows-[0fr]'}`}>
         <p className={ ` block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
   </article>
  )
}

export default FastArticle