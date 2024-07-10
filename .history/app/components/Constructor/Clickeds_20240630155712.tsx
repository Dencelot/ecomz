'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'

const Clickeds = ({data}:{data:any}) => {
   const filters:any = useAppSelector(actualFilters)
   return (
      <button className='px-[10px] flex items-center justify-between'>
         {filters[data.type].title}
         <Images width={25} heiht={25} alt="arrow" src="/public/img/"/>
      </button>
   )
}

export default Clickeds