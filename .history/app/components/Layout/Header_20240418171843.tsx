import React from 'react'
import Image from 'next/image'
import Menu from './menuheader/Menu'
import Burger from './menuheader/Burger'
import BurgerMob from './menuheader/BurgerMob'
const Header = () => {
  return (
    <header className='z-[9999] w-full sm:absolute top-0 left-0 fixed sm:bg-transparent bg-[var(--black-05)]'>
      <div className='container h-[80px] sm:h-[73px] pt-[24px] pb-[24px] sm:pb-[0] flex items-center justify-between'>
        <Image alt='Ecomz' className='sm:h-[37px] h-[32px] sm:w-[157px] w-[136px]'  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
        <Menu/>
        <BurgerMob/>
      </div>
    </header>
  )
}

export default Header