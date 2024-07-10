import React from 'react'
import Image from 'next/image'

const Phone = () => {
   return (
      <div>
         <Image quality={100} alt="phone" src={"/public/img/construcor/phone.png"} width={407} height={827}/>
      </div>
   )
}

export default Phone