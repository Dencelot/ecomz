import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='z-[9999]'>
      <div className='container h-[73px] pt-[24px] flex items-center justify-between'>
         <Image alt='Ecomz' width={157} height={37} src={'/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header