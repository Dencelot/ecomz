import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'

const KnowBtn = () => {
  return (
    <button>
      <span>
         <Image alt=''/>
      </span>
      <span>
         {data.top.arrdown}
      </span>
    </button>
  )
}

export default KnowBtn