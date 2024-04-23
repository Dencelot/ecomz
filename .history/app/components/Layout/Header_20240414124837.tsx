import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header>
      <div className='container h-['>
         <Image alt='Ecomz' width={157} height={37} src={'/public/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header