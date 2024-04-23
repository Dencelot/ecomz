'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
import Burger from './Burger'

const ContactsLink = () => {
   const [active,setActive]=useState(false)
   const handleClick = () =>{
      setActive(!active)
   }
  return (
   <li className='h-full'>
      <button onClick={handleClick} className='flex items-center justify-center h-full px-[16px] text-[var(--bazalt-100)] hover:bg-[var(--sunrise-40)] bg-[var(--white-100)] rounded-tl-[16px] rounded-bl-[16px] transition-colors'>
         <span c>
            {data.header.popup}
         </span>
         <Burger active={active}/>
      </button>
   
   </li>
  )
}

export default ContactsLink