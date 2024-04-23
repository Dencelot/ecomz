import React from 'react'
import Image from "next/image";
import Titles from './Titles';
import Question from './Question';
import KnowBtn from './KnowBtn';

const Top = () => {
  return (
   <section className="pt-[96px] sm:pt-0 container relative text-[var(--white-100)] h-screen minH flex items-start sm:flex-row flex-col">
      <Image quality={100} className="z-[1] top-0  right-0 w-screen h-full absolute xl:block hidden object-contain " width={1700} height={1000} alt="bg" src={'/img/bgmain.jpg'}/>
      <Image quality={100} className="z-[1] top-0 left-0 right-0 h-full object-left md:object-center lg:object-left absolute hidden sm:block xl:hidden" width={2000} height={1070} alt="bg" src={'/img/bgmainmiddle.jpg'}/>
      <Image quality={100} className="z-[1] top-0 left-0 right-0 h-full object-top w-full absolute block sm:hidden" width={900} height={1500} alt="bg" src={'/img/bgmainmobile.jpg'}/>
      
      {/* <Image quality={100} className="z-[2] top-[100px] w-auto absolute " width={1600} height={670} alt="Iphone" src={'/img/ipfone.png'}/> */}
      <Titles/>
      <Question/>
      <KnowBtn/>
   </section>
  )
}

export default Top