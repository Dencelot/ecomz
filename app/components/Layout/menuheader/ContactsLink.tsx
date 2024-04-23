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
      <button onClick={handleClick} className='flex items-center justify-center h-full md:px-[16px] md:text-[var(--bazalt-100)] md:hover:bg-[var(--sunrise-40)] text-[var(--white-100)] md:bg-[var(--white-100)] rounded-tl-[16px] rounded-bl-[16px] transition-colors'>
         <span className='md:mr-[12px]'>
            {data.header.popup}
         </span>
         <span className='md:block hidden'>
         <Burger active={active}/>
         </span>
      </button>
   
   </li>
  )
}

export default ContactsLink