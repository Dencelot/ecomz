'use client'
import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualFilters, addFilters } from '@/app/features/counter/chatKitSlice'
import { constructorData } from '@/app/data/constructor'
const Options = ({data}:{data:any}) => {
   const constructorD:any = constructorData
   const filters:any = useAppSelector(actualFilters)
   const dispatch = useAppDispatch()
   const handleClick = (id:number) => {
      const key = data.type
      const obj = {Object.keys(key):constructorD.filters[data.type].list.find((el:any) => el.id === id)}
      dispatch(addFilters({...filters, }))
   }
   return (
      <div className=''>
         <button className='py-[10px] font-[300] border-0 border-solid border-b-[1px] border-b-[--white-02] mb-[40px] text-[var(--white-06)] flex items-center justify-between w-full'>
            {filters[data.type].text}
            <Image className={'ml-2'} width={25} height={25} alt="arrow" src="/img/construcor/arrow.png"/>
         </button>
         <ul  className={`py-[4px] px-[16px] rounded-[12px] bg-[var(--black-80)]`}>
            {constructorD.filters[data.type].list.map((el:any)=>(
               <li onClick={()=>handleClick(el.id)} key={el.id} className={`flex items-center justify-between transition-colors hover:text-[var(--white-100)] ${filters[data.type].id === el.id ? '' : 'text-[var(--white-06)]'} py-[10px]  border-0 border-solid border-b-[1px] last:border-0 border-b-[--white-02] font-[300] cursor-pointer`}>
                  {el.text}
                  <Image className={`ml-[10px]`} alt='ok' src={'/img/construcor/ok.png'} width={32} height={32}/>
               </li>
            ))}
         </ul>
      </div>

   )
}

export default Options