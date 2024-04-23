import React from 'react'
import Image from 'next/image'
import MenuCnt from './menuheader/MenuCnt'
const Header = () => {
  return (
    <header className='z-[9999] w-full md:absolute top-0 left-0 fixed md:bg-transparent bg-[var(--black-7)] '>
      <div className='container h-[80px] md:h-[73px] pt-[24px] pb-[24px] md:pb-[0] flex items-center justify-between'>
        <Image alt='Ecomz' className='md:h-[37px] h-[32px] md:w-[157px] w-[136px]'  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
        <MenuCnt/>
      </div>
    </header>
  )
}

export default Header