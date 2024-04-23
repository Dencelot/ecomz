import React from 'react'
import Image from "next/image";
import Titles from './Titles';

const Top = () => {
  return (
   <div className="container relative text-[var(--white-100)] h-screen minH">
      <Image quality={100} className="z-[1] top-0 left-0 right-0 h-full absolute xl:block hidden" width={2800} height={1620} alt="bg" src={'/img/bgmain.jpg'}/>
      <Image quality={100} className="z-[1] top-0 left-0 right-0 h-full w-[calc(50px)] lg:object-left absolute hidden sm:block xl:hidden" width={2000} height={1070} alt="bg" src={'/img/bgmainmiddle.jpg'}/>
      <Image quality={100} className="z-[1] top-0 left-0 right-0 h-full object-top w-full absolute block sm:hidden" width={900} height={1500} alt="bg" src={'/img/bgmainmobile.jpg'}/>
      
      {/* <Image quality={100} className="z-[2] top-[100px] w-auto absolute " width={1600} height={670} alt="Iphone" src={'/img/ipfone.png'}/> */}
      <Titles/>
   </div>
  )
}

export default Top