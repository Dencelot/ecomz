import React from 'react'
import Image from 'next/image'

const Middle = () => {
  return (
    <section id='middle' className='relative'>
      <Image className='absolute top-0 left-0 w-full' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
   </section>
  )
}

export default Middle