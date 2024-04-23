import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header c>
      <div className='container h-[73px] pt-[24px]'>
         <Image alt='Ecomz' width={157} height={37} src={'/public/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header