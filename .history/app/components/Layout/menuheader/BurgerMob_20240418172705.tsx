'use client'
import React, { useState } from 'react'
import Burger from './Burger'

const BurgerMob = ({active,handleclick}:{active:boolean,handleclick:any}) => {
   
  return (
    <button>
      <Burger active={active} mob={true}/>
    </button>
  )
}

export default BurgerMob