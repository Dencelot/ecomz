import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button className='absolute top-[calc(100vh-160px)] xl:right-[120px] right-[40px] z-[2] transition-opacity hover:opacity-75 hidden sm:flex flex-col items-center justify-center'>
      <span className='  border-solid border-white border-[2px] flex items-center pt-[8px] justify-center rounded-full w-[77px] h-[77px] mb-[15px]'>
         <Image className='animate-bounce' quality={100} alt='arrow' src={'/img/arrd.png'} width={24} height={24}/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn