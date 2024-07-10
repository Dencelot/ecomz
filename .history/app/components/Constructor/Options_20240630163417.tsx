'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'
const Options = ({data}:{data:any}) => {
   const filters:any = useAppSelector(actualFilters)
   console.log)
   return (
      <button className='px-[10px] flex items-center justify-between'>
         {filters[data.type].title}
         <Image className={'ml-2'} width={25} height={25} alt="arrow" src="/img/construcor/arrow.png"/>
      </button>
   )
}

export default Options