import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button className='absolute bottom-[40px] right-[120px] z-[2]'>
      <span className='border-solid border-white border-[1px] flex items-center justify-center rounded-full w-[103px] h-[103px]'>
         <Image quality={100} alt='arrow' src={'/img/arrd.png'} width={24} height={24}/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn