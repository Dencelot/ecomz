import React from 'react'
import Image from 'next/image'
import FastStart from './FastStart'

const Middle = () => {
  return (
    <section id='middle' className='relative  '>
      {/* <div className='bg-[var(--black-90)] absolute sm:top-[8vw] top-[100px] left-0 w-full sm:h-[calc(100%-8vw)] h-[calc(100%-100px)]'>
      </div> */}
      <Image className='absolute top-0 left-0 w-full xl:object-contain xl:h-auto sm:h-[200px] xxs:h-[150px]' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
      <FastStart/>
   </section>
  )
}

export default Middle