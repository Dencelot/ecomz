import React from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'

const Demo = () => {
   return (
         <div className='md:w-1/3 bg-[var(--sunrise-01)] 2xl:text-[25px]  text-[20px] rounded-[32px] p-[32px]'>
            <div className='flex justify-between'>
               {
                  constructorData.demo.images.map(el=>(
                     <div key={el.id} className='p-2'>
                        <Image quality={100} alt={el.alt} src={el.src} width={61} height={61}/>
                     </div>
                  ))
               }
            </div>
         </div>
   )
}

export default Demo