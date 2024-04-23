'use client'
import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
import ContactsLink from './ContactsLink'
const Menu = ({active}:{active:boolean}) => {
   return (
      <nav className={`md:relative absolute top-full right-0 md:top-auto`}>
         <ul className='md:flex-row flex-col flex items-center md:h-[46px] md:rounded-[16px] md:overflow-hidden border-solid border-[1px] border-white'>
            <li className='pl-[24px]'>
               <Link className='transition-colors hover:text-[var(--white-06)] text-[var(--white-100)]' href={''}>{data.header.hash}</Link>
            </li>
            <li className='px-[32px]'>
               <Link className='text-[var(--white-100)] hover:text-[var(--white-06)] transition-colors' href={''}>{data.header.link}</Link>
            </li>
            <ContactsLink/>
         </ul>
      </nav>
   )
}

export default Menu