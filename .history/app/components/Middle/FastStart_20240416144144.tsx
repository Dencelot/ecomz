import { data } from '@/app/data/data'
import React from 'react'

const FastStart = () => {
   return (
      <div className='container pt-[40px] pb-[120px] relative z-[1] text-[var(--white-100)]'>
         <h2 className='mb-[92px] text-[60px] leading-[1.08] flex items-start justify-start flex-col'>
            <span>
            {data.middle.title.white}
            </span>
            <span className='text-[var(--sunrise-100)]'>
            {data.middle.title.color}
            </span>
         </h2>
      </div>
   )
}

export default FastStart