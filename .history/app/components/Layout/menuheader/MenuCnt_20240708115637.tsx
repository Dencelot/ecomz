'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import BurgerMob from './BurgerMob'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualActiveFilter, actualModals, addModals } from '@/app/features/counter/chatKitSlice'
import { usePathname } from 'next/navigation'

const MenuCnt = () => {
   const [active,setActive]= useState(false)
   const [init,setInit]= useState(false)
   const dispatch = useAppDispatch()
   const modals = useAppSelector(actualModals)
   const activeFilter = useAppSelector(actualActiveFilter)
   const pathname = usePathname()
   const handleClick = () =>{
      if(activeFilter){
         return
      }
      setInit(true)
      dispatch(addModals({demo:{open:false,isDemo:false},contacts:false}))

      if(modals.demo.open || modals.contacts){
         setActive(false)
      }else{
         setActive(!active)
      }


   }
  return (
      <>
      <Menu setActive={setActive} active={active} init={init}/>
      <BurgerMob handleClick={handleClick} active={pathname==='/constructor'&&activeFilter?activeFilter:active}/>
      </>
  )
}

export default MenuCnt