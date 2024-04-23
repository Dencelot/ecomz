'use client'
import React from 'react'
import Image from 'next/image'
const FastArticle = ({item}:{item:any}) => {
  return (
   <article className=''>
      <Image quality={100} width={24} height={24} alt={item.title} src={'/img/as_plus.png'}/>
      <h3>
         {item.title}
      </h3>
      <p className='' dangerouslySetInnerHTML={}>
         {item.descr}
      </p>
   </article>
  )
}

export default FastArticle