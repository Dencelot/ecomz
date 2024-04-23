import React from 'react'
import Link from 'next/link'
import { data } from '@/app/data/data'
const Menu = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link className='' href={''}>{data.header.hash}</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Menu