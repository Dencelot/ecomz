'use client'
import { data } from '@/app/data/data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import Picture from '../../Picture/Picture';
const SecondSlider = () => {
   return (
      <Swiper className='flex 2xl:h-[1066px] md:h-[844px] h-[558px] w-full overflow-auto sliderscroll' 
        slidesPerView={1}
        breakpoints={{
         1255:{
            slidesPerView:3
         },
         680:{
            slidesPerView:2.5
         },
         450:{
            slidesPerView:2
         }
        }}
        >
         <SwiperSlide className=' 2xl:pr-[16px] md:pr-[12px] pr-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none'>
            <div className='flex flex-col h-full bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] overflow-hidden'>
               <div className='md:p-[20px] p-[16px] md:pb-0 pb-0'>
                  <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                     {data.middle.possibilities.second.slider[0].title}
                  </h4>
                  <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                     {data.middle.possibilities.second.slider[0].subtitle}
                  </p>
               </div>
               <div className='flex-auto  overflow-hidden relative'>
                  <Picture width={500} height={1000} className='h-full w absolute bottom-0 left-0 object-contain object-left' src={data.middle.possibilities.second.slider[0].img} alt={data.middle.possibilities.second.slider[0].title}/>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide className=' 2xl:pl-[16px] md:pl-[12px] pl-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none 2xl:pr-[16px] md:pr-[12px] pr-[8px]'>
            <div className=' h-full  flex flex-col'>
               <div className='h-1/2 2xl:pb-[16px] md:pb-[12px] pb-[8px] '>
                  <div className='bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] border-b-0 h-full flex flex-col overflow-hidden'>
                     <div className='md:p-[20px] p-[16px] md:pb-0 pb-0'>
                        <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                           {data.middle.possibilities.second.slider[1].title}
                        </h4>
                        <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                           {data.middle.possibilities.second.slider[1].subtitle}
                        </p>
                     </div>
                     <div className='flex-auto  overflow-hidden relative'>
                        <img className='h-full absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom' src={data.middle.possibilities.second.slider[1].img} alt={data.middle.possibilities.second.slider[1].title}/>
                     </div>
                  </div>
               </div>


               <div className='h-1/2  2xl:pt-[16px] md:pt-[12px] pt-[8px] '>
                 
                  <div className='bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] border-t-0 h-full flex flex-col overflow-hidden'>
                    
                     <div className='flex-auto  overflow-hidden relative'>
                        <img className='h-full absolute top-0 left-1/2 -translate-x-1/2 object-contain object-top' src={data.middle.possibilities.second.slider[2].img} alt={data.middle.possibilities.second.slider[2].title}/>
                     </div>
                     <div className='md:p-[20px] p-[16px] md:pt-0 pt-0 '>
                        <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                           {data.middle.possibilities.second.slider[2].title}
                        </h4>
                        <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                           {data.middle.possibilities.second.slider[2].subtitle}
                        </p>
                     </div>
                  </div>
               </div>
               
            </div>
         </SwiperSlide>
         <SwiperSlide className=' 2xl:pr-[16px] md:pr-[12px] pr-[8px] 2xl:w-[512px] md:w-[418px] w-[271px] flex-none 2xl:pl-[16px] md:pl-[12px] pl-[8px]'>
            <div className='flex flex-col h-full bg-[var(--black-90)] rounded-[30px] border-[1px] border-solid border-[var(--black-50)] overflow-hidden'>
              
               <div className='flex-auto  overflow-hidden relative'>
                  <img className='h-full absolute bottom-0 left-1/2 -translate-x-1/2 object-contain' src={data.middle.possibilities.second.slider[3].img} alt={data.middle.possibilities.second.slider[3].title}/>
               </div>
               <div className='md:p-[20px] p-[16px] md:pt-0 pt-0'>
                  <h4 className='md:mb-[8px] mb-[4px] text-[var(--white-100)] leading-[1.3] 2xl:text-[32px] md:text-[26px] text-[20px]'>
                     {data.middle.possibilities.second.slider[3].title}
                  </h4>
                  <p className='text-[var(--black-50)] leading-[1.4] 2xl:text-[18px] text-[15px]'>
                     {data.middle.possibilities.second.slider[3].subtitle}
                  </p>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   )
}

export default SecondSlider