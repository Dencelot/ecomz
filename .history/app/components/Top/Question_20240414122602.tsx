import { data } from '@/app/data/data'
import React from 'react'

const Question = () => {
  return (
    <div className='relative z-[2] sm:w-1/2'>
      <div className='bg-[var(--neon-01)] rounded-[32px] p-[16px] w-[537px]'>
         <p className='flex flex-col p-[8px]'>
            <span className=''>{data.top.question.title}</span>
            <span>{data.top.question.subtitle}</span>
         </p>
         <button>
            {data.top.btn}
         </button>
      </div>

   </div>
  )
}

export default Question