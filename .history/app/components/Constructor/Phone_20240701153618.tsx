import React from 'react'
import Image from 'next/image'

const Phone = () => {
   return (
      <div className={`px-[56px] w-1/3`}>
         <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
      </div>
   )
}

export default Phone