import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
const Menu = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link href={''}>{data.header.}</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Menu