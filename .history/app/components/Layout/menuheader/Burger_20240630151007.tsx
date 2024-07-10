'use client'
import { useAppSelector } from '@/app/app/hooks'
import { actualModals } from '@/app/features/counter/chatKitSlice'
import React from 'react'

const Burger = ({active,mob}:{mob?:boolean,active:boolean}) => {
   const modals = useAppSelector(actualModals)
   console.log(modals,active)
   return (
      <span className='flex items-center justify-between flex-col w-[24px] h-[12px]'>
         <span className={`${(modals.demo.open || modals.contacts || active)?'bg-[var(--sunrise-100)] rotate-45 translate-y-[6px]':`${mob?'bg-[var(--white-100)]':'bg-[var(--bazalt-100)]'}`} transition-transform h-[2px] w-full rounded-[16px] `}>

         </span>
         <span className={`${(modals.demo.open || modals.contacts || active)&&'opacity-0'} transition-opacity h-[2px] w-full rounded-[16px] ${mob?'bg-[var(--white-100)]':'bg-[var(--bazalt-100)]'}`}>

         </span>
         <span className={`${(modals.demo.open || modals.contacts || active)?'bg-[var(--sunrise-100)]  -rotate-45 translate-y-[-4px]':`${mob?'bg-[var(--white-100)]':'bg-[var(--bazalt-100)]'}`} transition-transform h-[2px] w-full rounded-[16px] `}>

         </span>
      </span>
   )
}

export default Burger