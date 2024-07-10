'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Select from './Select'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualActiveFilter, addActiveFilter } from '@/app/features/counter/chatKitSlice'
const Filters = () => {
   const dispatch = useAppDispatch()
   const active = useAppSelector(actualActiveFilter)
   const handleClick = () =>{
      dispatch(addActiveFilter(!active))
   }
   const resFunc = () =>{
      if(window.innerWidth>767){
         dispatch(addActiveFilter(false))
      }
   }
   useEffect(()=>{
      window.addEventListener('resize',resFunc)
      window.addEventListener('resize',resFunc)

   },[])
   return (
      <>
      <button onClick={handleClick} className={`sm:hidden rounded-tr-[12px] w-[64px] rounded-br-[12px] bg-[var(--neon-02)] hover:bg-[var(--neon-03)] transition-colors  flex items-center justify-center absolute top-[100px] bottom-[100px] left-0 z-[4]`}>
         <Image className='max-w-[32px]' quality={100} width={64} height={64} alt='filter' src={'/img/filter.png'}/>
      </button>
      <div className={`${active?' bg-[var(--bazalt-100)] ':'sm:pr-[32px] pr-[50px] opacity-0 -translate-x-full'} sm:opacity-100 sm:translate-x-0 sm:transition-none duration-200 transition-[transform opacity] sm:pt-[32px] pt-[112px] sm:h-fit h-full left-0 top-0  w-full sm:top-auto sm:left-auto fixed sm:w-[47%] md:w-1/3 h-fit sm:bg-[var(--neon-01)] 2xl:text-[25px]  text-[20px] sm:relative z-[5] sm:rounded-[32px] p-[32px]`}>
         <Select type="select" data={constructorData.filters.types}/>
         <Select type="select" data={constructorData.filters.fonts}/>
         <Select type="clicked" data={constructorData.filters.colors}/>
      </div>
      </>
      
   )
}

export default Filters