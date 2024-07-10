'use client'
import React, { useState } from 'react'
import Burger from './Burger'
import { useAppSelector } from '@/app/app/hooks'
import { actualActiveFilter } from '@/app/features/counter/chatKitSlice'

const BurgerMob = ({active,handleClick}:{active:boolean,handleClick:any}) => {
   const activeFilter = useAppSelector(actualActiveFilter)
  return (
    <button onClick={handleClick} className={`md:hidden'>
      <Burger active={active} mob={true}/>
    </button>
  )
}

export default BurgerMob