import React from 'react'
import Image from "next/image";

const Top = () => {
  return (
   <div className="container relative text-[var(--white-100)] h-screen">
   <Image quality={100} className="z-[1] top-0 left-[30px]" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.png'}/>
   </div>
  )
}

export default Top