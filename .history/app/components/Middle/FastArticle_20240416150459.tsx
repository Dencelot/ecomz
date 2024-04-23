import React from 'react'
import Image from 'next/image'
const FastArticle = ({item:}) => {
  return (
   <article className=''>
      <Image quality={100} width={24} height={24} alt={item.title} src={'/public/img/as_plus.png'}/>
      <h3>
         {item.title}
      </h3>
      <p className=''>
         {item.descr}
      </p>
   </article>
  )
}

export default FastArticle