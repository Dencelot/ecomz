'use client'
import React from 'react'
import {Swiper} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Slider = (
   {
      children,
      }: Readonly<{
         children: React.ReactNode;
      }>) => {
   return (
      <Swiper
         slidesPerView={1.5}
         breakpoints={{
            968:{
               slidesPerView:3
            }
         }}
      >
         {children}
      </Swiper>
   )
}

export default Slider