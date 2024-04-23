import React from 'react'

const Burger = ({active,mob}:{mob?:boolean,active:boolean}) => {
   return (
      <span className='flex items-center justify-between flex-col w-[24px] h-[12px]'>
         <span className={`${active&&'rotate-45 translate-y-[6px]'} transition-transform h-[2px] w-full rounded-[16px] ${white?'bg-[]':'bg-[var(--bazalt-100)]'}`}>

         </span>
         <span className={`${active&&'opacity-0'} transition-opacity h-[2px] w-full rounded-[16px] ${white?'bg-[]':'bg-[var(--bazalt-100)]'}`}>

         </span>
         <span className={`${active&&'-rotate-45 translate-y-[-4px]'} transition-transform h-[2px] w-full rounded-[16px] ${white?'bg-[]':'bg-[var(--bazalt-100)]'}`}>

         </span>
      </span>
   )
}

export default Burger