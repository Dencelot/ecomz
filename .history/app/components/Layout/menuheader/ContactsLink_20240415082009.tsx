
import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
import Burger from './Burger'

const ContactsLink = () => {
  return (
   <li className='h-full'>
      <button className='flex items-center justify-center h-full px-[16px] text-[var(--bazalt-100)] hover:bg-[var(--sunrise-40)] bg-[var(--white-100)] rounded-tl-[16px] rounded-bl-[16px] transition-colors'>
         {data.header.popup}
         <Burger/>
      </button>
   
   </li>
  )
}

export default ContactsLink