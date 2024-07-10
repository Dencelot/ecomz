'use client'
import { data } from '@/app/data/data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import Picture from '../../Picture/Picture';
const ThirdSlider = () => {
   return (
      <Swiper className='flex 2xl:h-[1066px] md:h-[844px] h-[558px] w-full overflow-auto sliderscroll' 
        slidesPerView={1}
        breakpoints={{
         1255:{
            slidesPerView:3
         },
         500:{
            slidesPerView:1.7
         }
        }}
        >
         <SwiperSlide className=' 2xl:pr-[16px] md:pr-[12px] pr-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none'>
            <div className='flex flex-col h-full bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] overflow-hidden'>
               <div className='md:p-[20px] p-[16px] md:pb-0 pb-0'>
                  <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                     {data.middle.possibilities.third.slider[0].title}
                  </h4>
                  <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                     {data.middle.possibilities.third.slider[0].subtitle}
                  </p>
               </div>
               <div className='flex-auto  overflow-hidden relative'>
                  <Picture width={500} height={1000} className='h-full w-auto absolute bottom-0 left-1/2 -translate-x-1/2 object-contain ' src={data.middle.possibilities.third.slider[0].img} alt={data.middle.possibilities.third.slider[0].title}/>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide className=' 2xl:pl-[16px] md:pl-[12px] pl-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none 2xl:pr-[16px] md:pr-[12px] pr-[8px]'>
            <div className=' h-full  flex flex-col'>
                  <div className='bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)]  h-full flex flex-col overflow-hidden'>
                     <div className='md:p-[20px] p-[16px] md:pb-0 pb-0'>
                        <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                           {data.middle.possibilities.third.slider[1].title}
                        </h4>
                        <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                           {data.middle.possibilities.third.slider[1].subtitle}
                        </p>
                     </div>
                     <div className='flex-auto  overflow-hidden relative'>
                        <Picture width={500} height={1000} className='h-full w-auto absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom' src={data.middle.possibilities.third.slider[1].img} alt={data.middle.possibilities.third.slider[1].title}/>
                     </div>
                  </div>
            </div>
         </SwiperSlide>
         <SwiperSlide className=' 2xl:pr-[16px] md:pr-[12px] pr-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none 2xl:pl-[16px] md:pl-[12px] pl-[8px]'>
            <div className='flex flex-col h-full bg-[var(--neon-100)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] overflow-hidden'>
               <div className='md:p-[20px] p-[16px] md:pb-0 pb-0'>
                  <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] uppercase leading-[1.1] 2xl:text-[60px] md:text-[47px] text-[32px]'>
                     {data.middle.possibilities.third.slider[2].title}
                  </h4>
                  
               </div>
               <div className='flex-auto  overflow-hidden relative flex justify-center items-end pb-[40px]'>
                  <Link href={'/constructor'} className=' text-[18px] text-[var(--white-100)] relative z-[2] transition-colors hover:bg-[var(--black-90)] flex items-center justify-center h-[66px] w-[334px] rounded-[20px] bg-[var(--bazalt-100)]'>
                     {data.middle.possibilities.third.slider[2].btn}
                  </Link>
                  <img className='h-full absolute bottom-0 left-0 right-0 w-full object-contain object-bottom' src={data.middle.possibilities.third.slider[2].img} alt={data.middle.possibilities.third.slider[2].title}/>
               </div>
               
            </div>
         </SwiperSlide>
      </Swiper>
   )
}

export default ThirdSlider