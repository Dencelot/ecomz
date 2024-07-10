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
         data.list.map(el:any=>
            <button key={el.id}>

            </button>
         )
      }
      </>

   )
}

export default Clickeds