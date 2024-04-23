import React from 'react'
import Image from "next/image";
import Titles from './Titles';

const Top = () => {
  return (
   <div className="container relative text-[var(--white-100)] h-screen minH">
      <Image quality={100} className="z-[1] top-0 left-0 right-0 w-full absolute block " width={2000} height={1070} alt="bg" src={'/img/bgmainmiddle.jpg'}/>
      
      {/* <Image quality={100} className="z-[2] top-[100px] w-auto absolute " width={1600} height={670} alt="Iphone" src={'/img/ipfone.png'}/> */}
      <Titles/>
   </div>
  )
}

export default Top