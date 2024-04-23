import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
const Menu = () => {
   return (
      <nav>
         <ul className='flex items-center h-[46px] rounded-[16px] border-solid border-[1px] border-white'>
            <li className='pl-[24px]'>
               <Link className='transition-colors hover:text-[var(--white-06)] text-[var(--white-100)]' href={''}>{data.header.hash}</Link>
            </li>
            <li className='px-[32px]'>
               <Link className='text-[var(--white-100)] hover:text-[var(--white-06)] transition-colors' href={''}>{data.header.link}</Link>
            </li>
            <li>
               <Link className='text-[var(--bazalt-100)] bg-[var(--white-100)] rounded-[16px]' href={''}>{data.header.popup}</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Menu