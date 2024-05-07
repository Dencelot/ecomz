'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import BurgerMob from './BurgerMob'

const MenuCnt = () => {
   const [active,setActive]= useState(false)
   const [init,setInit]= useState(false)

   const handleClick = () =>{
      setActive(!active)
      setInit(true)
   }
  return (
      <>
      <Menu active={active} init={init}/>
      <BurgerMob handleClick={handleClick} active={active}/>
      </>
  )
}

export default MenuCnt