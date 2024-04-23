import React from 'react'
import Image from "next/image";

const Top = () => {
  return (
   <div className="container relative text-[var(--white-100)] h-screen">
      <Image quality={100} className="z-[1] top-0 left-[20px] right-0 absolute" width={1600} height={670} alt="bg" src={'/img/bgmain.jpg'}/>
      {/* <Image quality={100} className="z-[2] top-[100px] w-auto absolute " width={1600} height={670} alt="Iphone" src={'/img/ipfone.png'}/> */}

   </div>
  )
}

export default Top