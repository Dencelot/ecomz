'use client'
import { data } from '@/app/data/data'
import { useState } from 'react'
import Burger from './Burger'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualModals, addModals } from '@/app/features/counter/chatKitSlice'

const ContactsLink = ({setActive}:{setActive:any}) => {
   const dispatch = useAppDispatch()
   const activeFilter = useAppSelector(actualActiveFilter)

   const modals = useAppSelector(actualModals)
   const handleClick = () =>{
      setActive(false)
      
      dispatch(addModals({demo:{open:false,isDemo:modals.demo.isDemo},contacts: modals.demo.open ? false : !modals.contacts}))
      
   }
  return (
   <li className='h-full'>
      <button onClick={handleClick} className={`flex transition-opacity  hover:opacity-50 md:hover:opacity-100 items-center justify-between h-full md:px-[16px] ${(modals.demo.open || modals.contacts)?'text-[var(--sunrise-100)] border-solid border-0 border-l-[1px] border-[var(--sunrise-100)]': ' md:text-[var(--bazalt-100)] md:hover:bg-[var(--sunrise-40)] text-[var(--white-100)] md:bg-[var(--white-100)]'} md:w-[150px] rounded-tl-[16px] rounded-bl-[16px] transition-colors`}>
         <span className='md:mr-[12px]'>
            {(modals.demo.open || modals.contacts) ? data.header.popupOpened : data.header.popup}
         </span>
         <span className='md:block hidden'>
         <Burger active={modals.contacts}/>
         </span>
         
      </button>
   
   </li> 
  )
}

export default ContactsLink