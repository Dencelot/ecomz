import { data } from '@/app/data/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Partners = () => {
   return (
      <section className='container relative pt-[60px]'>
         <div className='overflow-hidden bg-[var(--bazalt-100)] absolute 2xl:w-screen top-0 w-full left-1/2 -translate-x-1/2 flex items-start justify-center'>
            <div className=' w-[1866px] bg-[var(--black-90)]'>
               <Image className='w-[1866px]  max-w-none ' width={1866} height={216} alt='bg' src='/img/middle/bgbot2.png'/>
            </div>
         </div>
         <div className='relative z-[2]'>
            <h2 className='md:mb-[32px] mb-[38px] md:text-[60px] xs:text-[50px] text-[32px] xs:leading-[1.1] leading-[1.2] text-center text-[var(--white-100)]'>
               {
                  data.bottom.partners.title
               }
               <br />
               <span className='text-[var(--sunrise-100)]'>
               {
                  data.bottom.partners.subtitle
               }
               </span>
            </h2>
            <div className='flex items-center justify-center flex-wrap xsm:max-w-full max-w-[416px] mx-auto'>
               {
                  data.bottom.list.map(item=>(
                     <Link className=' xsm:w-1/3 flex items-center justify-center w-1/2' target='_blank' href={item.link} key={item.id}>
                        <img className='dropShadow xsm:block hidden' src={item.img} alt={item.title} />
                        <img className='dropShadow xsm:hidden block ' src={item.imgmob} alt={item.title} />
                        <h4 className='hidden'>
                        {item.title}
                        </h4>
                     </Link>
                  ))
               }
            </div>
         </div>
         
      </section>
   )
}

export default Partners