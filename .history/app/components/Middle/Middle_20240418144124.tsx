import React from 'react'
import Image from 'next/image'
import FastStart from './FastStart'

const Middle = () => {
  return (
    <section id='middle' className='relative  '>
      <div className='bg-[var(--black-90)] absolute top-[8vw] left-0 w-full h-[calc(100%-8vw)]'>
      </div>
      <FastStart/>
   </section>
  )
}

export default Middle