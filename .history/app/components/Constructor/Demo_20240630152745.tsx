import React from 'react'
import Image from 'next/image'
import { constructorData } from '@/app/data/constructor'
import Btn from '../Button/Btn'

const Demo = () => {
   return (
         <div className='md:w-1/3 bg-[var(--sunrise-01)] 2xl:text-[25px]  text-[20px] rounded-[32px] p-[32px]'>
            <div className='flex -m-2'>
               {
                  constructorData.demo.images.map(el=>(
                     <div key={el.id} className='p-2 flex-auto'>
                        <Image quality={100} alt={el.alt} src={el.src} width={61} height={61}/>
                     </div>
                  ))
               }
            </div>
            <h2 className='block py-[49px]'>
               {constructorData.demo.title}
            </h2>
            <Btn isDemo text={constructorData.demo.btn} classNames={' px-[40px] rounded-[20px] bg-[var(--white-100)] text-[var(--bazalt-100)] hover:bg-[var(--sunrise-100)] hover:text-[var(--white-100)] transition-colors'}/>
         </div>
   )
}

export default Demo