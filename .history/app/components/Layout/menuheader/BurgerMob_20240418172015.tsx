'use client'
import React, { useState } from 'react'
import Burger from './Burger'

const BurgerMob = () => {
   const [active,setActive]=useState(false)
   const handleClick = () =>{
      setActive(!active)
   }
  return (
    <button>
      <Burger active={active} />
    </button>
  )
}

export default BurgerMob