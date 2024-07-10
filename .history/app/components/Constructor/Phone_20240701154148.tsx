'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Phone = () => {
   const[time,setTime] = useState('')
   return (
      <div className={`px-[56px] w-1/3 relative`}>
         <div className=' absolute z-0 left-[56px] right-[56px]'>
            <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
         </div>
         <div className={`z-[1] text-[12px] text-[var(--black-100)] absolute left-[140px] top-[20px] w-[50px] h-[20px] bg-[var(--sunrise-100)]`}>
            {time}
         </div>
      </div>
   )
}

export default Phone