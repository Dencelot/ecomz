import { data } from '@/app/data/data'
import React from 'react'

const Question = () => {
  return (
    <div className='relative z-[2] sm:w-1/2'>
      <div>

      <p>
         <span>{data.top.question.title}</span>
         <span>{data.top.question.subtitle}</span>
      </p>
   </div>
  )
}

export default Question