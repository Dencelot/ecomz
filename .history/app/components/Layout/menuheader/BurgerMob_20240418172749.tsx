'use client'
import React, { useState } from 'react'
import Burger from './Burger'

const BurgerMob = ({active,handleClick}:{active:boolean,handleClick:any}) => {
   
  return (
    <button>
      <Burger active={active} mob={true}/>
    </button>
  )
}

export default BurgerMob