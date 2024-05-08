import { data } from '@/app/data/data'
import React from 'react'
import Btn from '../Button/Btn'

const Question = () => {
  return (
    <div className='absolute sm:left-[40px] h-max left-0 md:left-auto md:right-[40px] md:top-1/2 md:-translate-y-[200px]   sm:bottom-[40px] bottom-0  z-[2] w-full sm:w-auto lg:w-[420px] xl:w-[480px] flex items-start justify-center '>
      <div className= 'backdrop-blur  bg-[var(--black-07] md:bg-[var(--neon-03)] rounded-[32px] p-[16px] w-full sm:max-w-[537px] flex items-center justify-between  '>
         <p className='flex flex-col p-[8px] mr-[12px] xxs:text-[18px] text-[14px]'>
            <span className='text-[var(--sunrise-100)] '>{data.top.question.title}</span>
            <span className=' text-nowrap'>{data.top.question.subtitle}</span>
         </p>
         
         <Btn classNames={'hover:bg-[var(--sunrise-40)] transition-colors bg-[var(--white-100)] text-[var(--bazalt-100)] rounded-[20px] xxs:px-[40px] px-[20px] py-[16px] xxs:text-[18px] text-[16px]'}>
            <>
            <span className='sm:block hidden'>{data.top.btn.big}</span>
            <span className='sm:hidden'>
            {data.top.btn.small}
            </span>
            </>
         </Btn>

      </div>

   </div>
  )
}

export default Question