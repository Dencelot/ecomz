import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button>
      <span>
         <Image alt='arrow' src={'/public/img/arrd.png'} width={20} height={20}/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn