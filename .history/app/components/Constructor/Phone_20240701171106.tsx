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
         <div className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bgPhone aspect-square h-full'>
            <svg className='max-h-full aspect-square' width="1016" height="1015" viewBox="0 0 1016 1015" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1015.5 507.5C1015.5 787.785 788.285 1015 508 1015C227.715 1015 0.5 787.785 0.5 507.5C0.5 227.215 227.715 0 508 0C788.285 0 1015.5 227.215 1015.5 507.5Z" fill="url(#paint0_radial_9908_230067)" />
            <defs>
               <radialGradient id="paint0_radial_9908_230067" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(508 507.5) rotate(90) scale(507.5)">
                  <stop stop-color="#E1071A" />
                  <stop offset="0.270833" stop-color="#E1071A" stop-opacity="0.6" />
                  <stop offset="0.572917" stop-color="#E1071A" stop-opacity="0.2" />
                  <stop offset="1" stop-color="#E1071A" stop-opacity="0" />
               </radialGradient>
            </defs>
            </svg>
         </div>
         <div className=' absolute z-[1] xl:left-[56px] xl:right-[56px] left-[20px] right-[20px]'>
            <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
         </div>
         <div className={`z-[2] flex items-center justify-center lg:text-[13px] text-[11px] font-[900] font-[var(--third-family)]  absolute lg:left-[115px] left-[60px] lg:top-[27px] top-[17px] w-[50px] h-[28px] bg-[var(--white-100)]`}>
            {time}
         </div>
         
         <div className={`relative z-[2] lg:px-[40px] px-[30px]  lg:py-[80px] py-[50px]`}>
            <div className='h-[650px] overflow-auto'>

               <p className={`font-[400] lg:mb-[30px] mb-[20px] truncate text-[#bcbaba] text-[14px] rounded-[5px] px-[12px] py-[10px] bg-[#f1f1f1] block`}>
                  Поиск по названию или категории
               </p>
               <Swiper
               className='lg:mb-[30px] mb-[20px] '
               slidesPerView={2.3}
               spaceBetween={10}
               >
                  {
                     constructorData.phone.smallBanners.map(el=>(
                        <SwiperSlide className=' aspect-square '>
                           <div className={`relative p-[10px] w-full h-full flex items-center justify-center font-[400] text-[var(--white-100)] text-[16px] text-center`}>
                              <p className='relative z-[1] leading-6'>
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
               spaceBetween={10}
               className='lg:mb-[30px] mb-[20px] '
               >
                  {
                     constructorData.phone.catalog.map(el=>(
                        <SwiperSlide className='' style={{height:'auto'}}>
                           <article className='flex flex-col h-full'>
                              <div className='mb-[10px] overflow-hidden rounded-[2px] relative '>
                                 <p className=' absolute z-[1] top-0 left-0 text-center flex items-center justify-center font-[500] text-[12px] bg-[#28a745] rounded-[2px]  text-[var(--white-100)] h-[22px] w-[40px]'>
                                    -{el.discount}%
                                 </p>
                                 <Image className='h-auto w-full' quality={100} alt={el.text} src={el.img} width={134} height={126}/>
                              </div>
                              <h2 className='flex-auto mb-[10px] font-[400] text-[10px] text-[#6c757d] leading-4'>
                                 {el.text}
                              </h2>
                              <p className='flex items-center justify-between flex-wrap  font-[400] text-[14px]'>
                                 <span className='mr-[5px] line-through text-[#959595]'>
                                    {el.price} {el.priceType}
                                 </span>
                                 <span className='font-[700]'>
                                    {
                                    Math.round(+el.price.replace(' ','').trim() - (+el.price.replace(' ','').trim() * (+el.discount) / 100))
                                    } {el.priceType}
                                 </span>
                              </p>
                              <button className='font-[400] bg-[#e1071a] text-[12px] text-[var(--white-100)] text-center w-full rounded-[5px] flex items-center justify-center min-h-[30px]'>
                                    {el.buy}
                              </button>

                           </article>
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
               <div className={`rounded-[16px] lg:mb-[30px] mb-[20px]  overflow-hidden relative z-[2] h-[128px] p-[10px] w-full flex items-center justify-center font-[400] text-[var(--white-100)] text-[22px] text-center`}>
                  <p className='relative z-[1] leading-7 w-1/2'>
                     {constructorData.phone.bigBanner.text}
                  </p>
                  <Image className='z-0 w-full h-full absolute top-[0px] left-[0px]' src={constructorData.phone.bigBanner.img} quality={100} alt={constructorData.phone.bigBanner.text} width={328} height={122} />
               </div>
            </div>
         </div>
         
      </div>
   )
}

export default Phone