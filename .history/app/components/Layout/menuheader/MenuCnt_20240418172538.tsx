'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import BurgerMob from './BurgerMob'

const MenuCnt = () => {
   const [active,setActive]= useState(false)

  return (
      <>
      <Menu ac/>
      <BurgerMob/>
      </>
  )
}

export default MenuCnt