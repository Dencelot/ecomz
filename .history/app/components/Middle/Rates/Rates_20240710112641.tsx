import { data } from '@/app/data/data'
import React from 'react'
import Rate from './Rate'
import Image from 'next/image'

const Rates = () => {
   return (
      <section className='container relative z-[1] xl:pt-[120px] pt-[60px] xl:pb-[170px] md:pb-[110px] pb-[60px]'>
         
         <h2 className="text-center text-[var(--sunrise-100)] xl:mb-[60px] mb-[40px] font-[500] 2xl:text-[105px] md:text-[64px] xs:text-[54px] text-[38px] leading-[100%] 2xl:mb-[120px] md:mb-[80px] mb-[30px] ">
            {
               data.middle.rates.title
            }
         </h2>
         <div className='flex items-center justify-center md:flex-nowrap flex-wrap -m-[12px] relative'>
            <Pictur className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt='rates' width={1015} height={1015} src={'/img/middle/Vector.png'}/>
            {
               data.middle.rates.list.map(item=>(
                  <React.Fragment key={item.id}>
                     <Rate item={item}/>
                  </React.Fragment>
               ))
            }
         </div>
         
      </section>
   )
}

export default Rates