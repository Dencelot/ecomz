import React from 'react'
import Image from 'next/image'

const Phone = () => {
   return (
      <div className={`px-[56px]`}>
         <Image quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={827}/>
      </div>
   )
}

export default Phone