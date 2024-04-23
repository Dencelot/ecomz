import React from 'react'

const Burger = ({active}:{active:boolean}) => {
   return (
      <span className='flex items-center justify-between flex-col w-[24px] h-[12px]'>
         <span className='h-[2px] w-full rounded-[16px] bg-[var(--bazalt-100)]'>

         </span>
         <span className={`${active} h-[2px] w-full rounded-[16px] bg-[var(--bazalt-100)]`}>

         </span>
         <span className='h-[2px] w-full rounded-[16px] bg-[var(--bazalt-100)]'>

         </span>
      </span>
   )
}

export default Burger