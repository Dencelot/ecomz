import { data } from '@/app/data/data'
import React from 'react'

const Question = () => {
  return (
    <div className='absolute sm:left-[40px] left-0 bottom-0 md:relative z-[2] sm:w-[40%] flex items-start justify-center pt-[10%]'>
      <div className='bg-[var(--neon-01)] rounded-[32px] p-[16px] w-full max-w-[537px] flex items-center justify-between'>
         <p className='flex flex-col p-[8px] text-[18px]'>
            <span className='text-[var(--sunrise-100)]'>{data.top.question.title}</span>
            <span className=' text-nowrap'>{data.top.question.subtitle}</span>
         </p>
         <button className='bg-[var(--white-100)] text-[var(--bazalt-100)] rounded-[20px] px-[40px] py-[16px]'>
            {data.top.btn}
         </button>
      </div>

   </div>
  )
}

export default Question