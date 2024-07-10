'use client'
import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
import ContactsLink from './ContactsLink'
import { useAppSelector } from '@/app/app/hooks'
import { actualModals } from '@/app/features/counter/chatKitSlice'
const Menu = ({active,setActive}:{setActive:any,init:boolean,active:boolean}) => {
   const modals = useAppSelector(actualModals)
   return (
      <nav className={` ${active?'translate-x-0 ':' md:translate-x-0 translate-x-full'} ${init?'transition-transform':''} md:bg-inherit bg-[var(--black-07)] md:h-auto h-screen md:relative absolute top-full right-0 md:top-auto`}>
         <div className='absolute top-0 left-0 right-0 bottom-0 z-0 backdrop-blur'>
         </div>
         <ul className={`relative z-[2]  md:p-0 p-[20px]  items-end md:flex-row flex-col flex md:items-center md:h-[46px] md:rounded-[16px] md:overflow-hidden md:border-solid md:border-[1px]  ${(modals.demo.open || modals.contacts)?'md:border-[var(--sunrise-100)]':'md:border-white'}`}>
            <li className='md:pl-[24px]'>
               <Link onClick={()=>setActive(false)} className={`transition-opacity  ${(modals.demo.open || modals.contacts)?'text-[var(--sunrise-100)]':'hover:opacity-50 text-[var(--white-100)]'}`} href={'/#possibilities'}>{data.header.hash}</Link>
            </li>
            <li className='md:px-[32px]'>
               <Link onClick={()=>setActive(false)} className={`transition-opacity  ${(modals.demo.open || modals.contacts)?'text-[var(--sunrise-100)]':'hover:opacity-50 text-[var(--white-100)]'}`} href={'/constructor'}>{data.header.link}</Link>
            </li>
            <ContactsLink setActive={setActive}/>
         </ul>
      </nav>
   )
}

export default Menu