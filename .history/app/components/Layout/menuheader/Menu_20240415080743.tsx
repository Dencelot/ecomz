import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
const Menu = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link className='transition-colors text-[var(--white-100)]' href={''}>{data.header.hash}</Link>
            </li>
            <li>
               <Link className='text-[var(--white-100)]' href={''}>{data.header.link}</Link>
            </li>
            <li>
               <Link className='text-[var(--white-100)]' href={''}>{data.header.popup}</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Menu