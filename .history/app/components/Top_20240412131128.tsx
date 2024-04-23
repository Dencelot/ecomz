import React from 'react'
import Image from "next/image";

const Top = () => {
  return (
   <div className="container relative text-[var(--white-100)] ">
   <Image quality={100} className="z-[1]" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.png'}/>
   </div>
  )
}

export default Top