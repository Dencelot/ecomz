'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'
const Options = ({data}:{data:any}) => {
   const filters:any = useAppSelector(actualFilters)
   console.log(filters[data.type])
   return (
      <div>
         <button className='py-[10px] border-0 border-solid border-b-[1px] border-b-[--white-02] mb-[40px] text-[var(--white-06)] flex items-center justify-between w-full'>
            {filters[data.type].text}
            <Image className={'ml-2'} width={25} height={25} alt="arrow" src="/img/construcor/arrow.png"/>
         </button>
         <ul>
            {}
         </ul>
      </div>

   )
}

export default Options