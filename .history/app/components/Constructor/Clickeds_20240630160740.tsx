'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'

const Clickeds = ({data}:{data:any}) => {
   const filters:any = useAppSelector(actualFilters)
   console.log(data)
   return (
      <>
      {
         data.list.map(el=>
            <button key={el.id}>

            </button>
         )
      }
            <button className='px-[10px] flex items-center justify-between'>
         
         </button>
      </>

   )
}

export default Clickeds