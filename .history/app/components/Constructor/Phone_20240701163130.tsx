'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import { constructorData } from '@/app/data/constructor';
const Phone = () => {
   const[time,setTime] = useState('')
   const setTimeFunc = () =>{
      let date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      let t = h + ':' + (+m>=10?m:'0'+m)
      setTime(t)
   }
   useEffect(()=>{
      setTimeFunc()

      let t = setInterval(()=>{
         setTimeFunc()
      },10000)
      return ()=> clearInterval(t)
   },[])
   return (
      <div className={`xl:px-[56px] px-[20px] flex-none xl:w-[510px] w-[340px] relative text-[var(--bazalt-100)]`}>
         <div className=' absolute z-0 xl:left-[56px] xl:right-[56px] left-[20px] right-[20px]'>
            <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
         </div>
         <div className={`z-[1] flex items-center justify-center lg:text-[13px] text-[11px] font-[900] font-[var(--third-family)]  absolute lg:left-[115px] left-[60px] lg:top-[27px] top-[17px] w-[50px] h-[28px] bg-[var(--white-100)]`}>
            {time}
         </div>
         
         <div className={`relative z-[2] lg:px-[40px] px-[30px]  lg:py-[80px] py-[50px]`}>
            <p className={`font-[400] lg:mb-[30px] mb-[20px] truncate text-[#bcbaba] text-[14px] rounded-[5px] px-[12px] py-[10px] bg-[#f1f1f1] block`}>
               Поиск по названию или категории
            </p>
            <Swiper
            className='lg:mb-[30px] mb-[20px] '
            slidesPerView={2.3}
            spaceBetween={5}
            >
               {
                  constructorData.phone.smallBanners.map(el=>(
                     <SwiperSlide className=' aspect-square '>
                        <div className={`relative p-[10px] w-full h-full flex items-center justify-center font-[400] text-[var(--white-100)] text-[16px] text-center`}>
                           <p className='relative z-[1]'>
                              {el.text}
                           </p>
                           <Image className='z-0 w-full h-full absolute top-[0px] left-[0px]' src={el.img} quality={100} alt={el.text} width={138} height={138} />
                        </div>
                     </SwiperSlide>
                  ))
               }
            </Swiper>
            <Swiper
            slidesPerView={2.3}
            spaceBetween={5}
            >
               {
                  constructorData.phone.catalog.map(el=>(
                     <SwiperSlide className='rounded-[2px] bg-[#28a745] text-[var(--white-100)]'>
                        <article>
                           <div className='overflow-hidden rounded-[2px] relative '>
                              <p className=' block font-[500] text-[12px] rounded-[2px]  text-[var(--white-100)] py-[3px] w-[40px]'>
                                 {el.discount}
                              </p>
                              <Image className='h-auto w-full' quality={100} alt={el.text} src={el.img} width={134} height={126}/>
                           </div>

                        </article>
                     </SwiperSlide>
                  ))
               }
            </Swiper>
         </div>
      </div>
   )
}

export default Phone