import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header>
      <div className='container'>
         <Image alt='Ecomz' w=[157] src={'/public/img/ecomz_logo.svg'}/>
      </div>
    </header>
  )
}

export default Header