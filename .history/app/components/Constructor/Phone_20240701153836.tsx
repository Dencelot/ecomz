'use client'
import React from 'react'
import Image from 'next/image'

const Phone = () => {
   return (
      <div className={`px-[56px] w-1/3 relative`}>
         <div className=' absolute z-0 left-[56px] right-[56px]'>
            <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
         </div>
         <div children;>

         </div>
      </div>
   )
}

export default Phone