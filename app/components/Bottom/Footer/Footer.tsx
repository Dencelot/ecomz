import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/app/data/data'
const Footer = () => {
   return (
      <footer className='max-w-[1840px] w-full mx-auto sm:px-[40px] px-[16px] pb-[60px] sm:pt-[120px] pt-[60px]'>
         <div className='flex items-end justify-center -mb-[2px]'>
            <Image quality={100} className='max-w-[1566px] xs:w-[80%] w-[60%]' alt='ecomz' src='/img/bottom/logoxl.png' width={1566} height={324}/>
         </div>
         <div className='relative z-[1] bg-[var(--black-90)] rounded-[30px] sm:px-[80px] px-[16px] pt-[56px] pb-[24px]'>
            <div className='flex sm:items-start items-center justify-between sm:flex-row flex-col'>
               <Link href="/">
                  <Image alt='Ecomz' className=''  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
               </Link>
               <Image alt='Ecomz' className=''  width={180} height={180} src={'/img/bottom/ninja.png'}/>
               <div className='sm:w-[50%] flex items-start justify-between flex-col'>
                  <div className='sm:pb-[45px] flex sm:items-start items-center justify-between w-full flex-wrap sm:flex-row flex-col '>
                     <Link className='text-[var(--white-100)] text-[18px] leading-[1.4] mr-[10px] mb-[15px]' target='_blank' href={data.footer.email.link}>
                        {data.footer.email.text}
                     </Link>
                     <Link className='text-[var(--white-100)] text-[18px] leading-[1.4] mb-[15px] ' target='_blank' href={data.footer.tel.link}>
                        {data.footer.tel.text}
                     </Link>
                  </div>

                  <Link className='text-[var(--white-100)] text-[18px] leading-[1.4] sm:text-left text-center' target='_blank' href={data.footer.map.link}>
                     {data.footer.map.text}
                  </Link>
               </div>

            </div>
            <div className='pt-[24px] mt-[25px] flex items-center justify-center border-t-[1px] border-solid border-[var(--black-50)]'>
               <p className='text-[var(--black-50)] text-[18px] leading-[1.4] text-center'>
                  {data.footer.copy.text}
               </p>
            </div>
         </div>
         
      </footer>
   )
}

export default Footer