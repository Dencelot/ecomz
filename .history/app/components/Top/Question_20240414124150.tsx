import { data } from '@/app/data/data'
import React from 'react'

const Question = () => {
  return (
    <div className='absolute sm:left-[40px] left-0 sm:bottom-[40px] bottom-0 md:relative z-[2] w-full md:w-[40%] flex items-start justify-center pt-[10%]'>
      <div className= 'bg-[var(--black-09)] md:bg-[var(--neon-01)] rounded-[32px] p-[16px] w-full sm:max-w-[537px] flex items-center justify-between'>
         <p className='flex flex-col p-[8px] xxs:text-[18px] text-[14px]'>
            <span className='text-[var(--sunrise-100)]'>{data.top.question.title}</span>
            <span className=' text-nowrap'>{data.top.question.subtitle}</span>
         </p>
         <button className='bg-[var(--white-100)] text-[var(--bazalt-100)] rounded-[20px] xxs:px-[40px] px-[20px] py-[16px] xxs:text-[18px] text-[16px]'>
            <span className='md:'>{data.top.btn.big}</span>
            <span>
            {data.top.btn.small}
            </span>
         </button>
      </div>

   </div>
  )
}

export default Question