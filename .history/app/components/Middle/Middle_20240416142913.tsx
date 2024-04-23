import React from 'react'
import Image from 'next/image'

const Middle = () => {
  return (
    <section id='middle' className='relative'>
      Middle
      <Image alt="bg" src={'/public/img/topsection.png'} width={2100}/>
   </section>
  )
}

export default Middle