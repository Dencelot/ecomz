import React from 'react'
import Image from "next/image";
import Titles from './Titles';
import Question from './Question';
import KnowBtn from './KnowBtn';

const Top = () => {
  return (
   <section className=" pt-[96px] sm:pt-0 container relative text-[var(--white-100)] h-screen minH flex items-start sm:flex-row flex-col">
      <Image quality={100} className="z-[1] top-1/2 -translate-y-1/2  right-0 w-full h-auto absolute xl:block hidden object-contain " width={1700} height={1000} alt="bg" src={'/img/bgmain.jpg'}/>
      <Image quality={100} className="z-[1] top-0 left-0 right-0  h-full  object-left absolute hidden xs:block xl:hidden" width={2000} height={1350} alt="bg" src={'/img/bgmainmiddle.jpg'}/>
      <Image quality={100} className="z-[1]  left-0 right-0 bottom-[40px] h-[calc(100%-100px)] object-bottom w-full absolute block xs:hidden" width={900} height={1500} alt="bg" src={'/img/bgmainmobile.jpg'}/>
      
      {/* <Image quality={100} className="z-[2] top-[100px] w-auto absolute " width={1600} height={670} alt="Iphone" src={'/img/ipfone.png'}/> */}
      <Titles/>
      <Question/>
      <KnowBtn/>
   </section>
  )
}

export default Top