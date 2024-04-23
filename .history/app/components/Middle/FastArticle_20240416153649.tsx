'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { createMarkup } from '@/app/funcs/createMp'
const FastArticle = ({item}:{item:any}) => {
   const [active,setActive] = useState(false)
   const [hei,setHei] = useState(0)

   
   const refP = useRef<any>(null)
   const handleClick = () =>{
      if(refP.current){
         let h = refP.current.clientHeight
         setHei(h)
      }
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
      <div  className={`overflow-hidden transition-all`}>
         <p ref={refP} className={ ` ${active?'':'truncateP'} block min-h-0 `} dangerouslySetInnerHTML={createMarkup(item.descr)}>
         </p>
      </div>
      
   </article>
  )
}

export default FastArticle