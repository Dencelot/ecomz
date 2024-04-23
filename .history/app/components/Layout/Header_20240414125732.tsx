import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='z-[9999] w-full '>
      <div className='container h-[80px] sm:h-[73px] pt-[24px] pb-[24px] sm:pb-[0] flex items-center justify-between'>
         <Image alt='Ecomz' className='h-[157px] w-[157px]'  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header