'use client'
import React, { useState } from 'react'
import Burger from './Burger'

const  = ({active,handleClick}:{active:boolean,handleClick:any}) => {
   
  return (
    <button onClick={handleClick} className='md:hidden'>
      <Burger active={active} mob={true}/>
    </button>
  )
}

export default BurgerMob