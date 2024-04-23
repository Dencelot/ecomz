import React from 'react'
import Image from 'next/image'

const Middle = () => {
  return (
    <section id='middle' className='relative bg-white'>
      Middle
      <Image className='absolute' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
   </section>
  )
}

export default Middle