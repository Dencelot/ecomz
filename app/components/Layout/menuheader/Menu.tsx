'use client'
import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
import ContactsLink from './ContactsLink'
const Menu = ({active,init,setActive}:{setActive:any,init:boolean,active:boolean}) => {
   return (
      <nav className={` ${active?'translate-x-0 ':' md:translate-x-0 translate-x-full'} ${init?'transition-transform':''} md:bg-inherit bg-[var(--black-07)] md:h-auto h-screen md:relative absolute top-full right-0 md:top-auto`}>
         <div className='absolute top-0 left-0 right-0 bottom-0 z-0 backdrop-blur'>
         </div>
         <ul className='relative z-[2]  md:p-0 p-[20px]  items-end md:flex-row flex-col flex md:items-center md:h-[46px] md:rounded-[16px] md:overflow-hidden md:border-solid md:border-[1px] md:border-white'>
            <li className='md:pl-[24px]'>
               <Link onClick={()=>setActive(false)} className='transition-colors hover:text-[var(--white-06)] text-[var(--white-100)]' href={'/#possibilities'}>{data.header.hash}</Link>
            </li>
            <li className='md:px-[32px]'>
               <Link onClick={()=>setActive(false)} className='text-[var(--white-100)] hover:text-[var(--white-06)] transition-colors' href={'/constructor'}>{data.header.link}</Link>
            </li>
            <ContactsLink setActive={setActive}/>
         </ul>
      </nav>
   )
}

export default Menu