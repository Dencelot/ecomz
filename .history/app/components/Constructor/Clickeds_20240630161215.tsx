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
         data.list.map((el:any)=>
            <button  key={el.id} className={` rounded-full w-[32px] h-[32px]  overflow-hidden`}>
               <span className='block'>
                  <span className={`bg-[var(--white-100)] block w-1/2 h-full`}>

                  </span>
                  <span className={``}>

                  </span>
               </span>
               
            </button>
         )
      }
      </>

   )
}

export default Clickeds