import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button className='absolute bottom-[40px] right-[120px] z-[2]'>
      <span>
         <Image alt='arrow' src={'/img/arrd.png'} width={20} height={20}/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn