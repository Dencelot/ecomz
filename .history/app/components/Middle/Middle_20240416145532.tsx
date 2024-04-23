import React from 'react'
import Image from 'next/image'
import FastStart from './FastStart'

const Middle = () => {
  return (
    <section id='middle' className='relative mt-[300px] bg-[]'>
      <Image className='absolute top-0 left-0 w-full' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
      <FastStart/>
   </section>
  )
}

export default Middle