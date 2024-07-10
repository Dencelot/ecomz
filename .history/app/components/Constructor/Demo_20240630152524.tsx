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
            <button className='rounded-[20px]'>{constructorData.demo.btn}</button>
            <Btn isDemo text={data.middle.possibilities.btn} classNames={'2xl:mt-[32px] md:mt-[24px] mt-[20px] xs:text-[32px] text-[24px] leading-[1.3] text-[var(--white-100)] md:rounded-[20px] rounded-[30px] md:py-[45px] py-[19px] bg-[var(--bazalt-100)] w-full transition-colors hover:bg-[var(--black-90)]'}/>

         </div>
   )
}

export default Demo