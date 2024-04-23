'use client'
import React, { useState } from 'react'
import Burger from './Burger'

const BurgerMob = ({active}:{active:boolean,}) => {
   const [active,setActive]=useState(false)
   const handleClick = () =>{
      setActive(!active)
   }
  return (
    <button>
      <Burger active={active} mob={true}/>
    </button>
  )
}

export default BurgerMob