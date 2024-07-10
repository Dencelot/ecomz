'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import BurgerMob from './BurgerMob'

const MenuCnt = () => {
   const [active,setActive]= useState(false)
   const [activeBurger,setActiveBurger]= useState(false)

   const [init,setInit]= useState(false)

   const handleClick = () =>{
      if(window.innerWidth<968){
         setActive(!active)
         setActiveBurger(!activeBurger)
         setInit(true)
      }
   }
  return (
      <>
      <Menu handleClick={handleClick} active={active} init={init}/>
      <BurgerMob handleClick={handleClick} active={activeBurger}/>
      </>
  )
}

export default MenuCnt