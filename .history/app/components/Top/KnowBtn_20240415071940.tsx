import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button className='absolute bottom-[40px] right-[120px] z-[2] transition-opacity hover:opacity-75 flex flex-col items-center justify-center'>
      <span className='  border-solid border-white border-[2px] flex items-center justify-center rounded-full w-[77px] h-[77px] mb-[15px]'>
         <Image quality={100} alt='arrow' src={'/img/arrd.png'} width={24} height={24}/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn