'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import BurgerMob from './BurgerMob'

const MenuCnt = () => {
   const [active,setActive]= useState(false)
   const handleClick = () =>{
      setActive(!active)
   }
  return (
      <>
      <Menu active={active}/>
      <BurgerMob handleClick={handleClick}/>
      </>
  )
}

export default MenuCnt