'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'
import { actualFilters } from '@/app/features/counter/chatKitSlice'
import { constructorData } from '@/app/data/constructor'
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
            {constructorData.filters[data.type].list.map((el:any)=>(
               <li key={el.id}>
                  {el.text}

               </li>
            ))}
         </ul>
      </div>

   )
}

export default Options