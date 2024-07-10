'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'

const Clickeds = ({data}:{data:any}) => {
   const filters:any = useAppSelector(actualFilters)
   console.log(data)
   return (
      <div>
      {
         data.list.map((el:any)=>
            <button  key={el.id} className={` w-[32px] h-[32px] p-[4px] flex items-center justify-center`}>
               <span className={`bg-[var(--white-100)] block w-1/2 h-full  rounded-tl-full rounded-bl-full`}>

               </span>
               <span className={`bg-[var(--white-100)] block w-1/2 h-full  rounded-tr-full rounded-br-full`}>

               </span>
            </button>
         )
      }
      </div>

   )
}

export default Clickeds