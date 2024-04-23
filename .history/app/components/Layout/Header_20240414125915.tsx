import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='z-[9999] w-full sm:relative top-0 left-0 fixed bg-[var(--black-0.5)]'>
      <div className='container h-[80px] sm:h-[73px] pt-[24px] pb-[24px] sm:pb-[0] flex items-center justify-between'>
         <Image alt='Ecomz' className='sm:h-[37px] h-[32px] sm:w-[157px] w-[136px]'  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header