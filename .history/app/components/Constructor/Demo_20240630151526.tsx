import React from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'

const Demo = () => {
   return (
         <div className='bg-[var(--sunrise-01)] 2xl:text-[25px]  text-[20px] rounded-[32px] p-[32px]'>
            <div>
               {
                  constructorData.demo.images.map()
               }
            </div>
         </div>
   )
}

export default Demo