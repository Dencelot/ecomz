import React from 'react'
import Image from 'next/image'
import FastStart from './FastStart'

const Middle = () => {
  return (
    <section id='middle' className='relative mt-[300px] bg-[var(--black-90)]'>
      <Image className='absolute top-[-150px] left-0 w-full' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
      <FastStart/>
   </section>
  )
}

export default Middle