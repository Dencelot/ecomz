import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header>
      <div className='container'>
         <Image src={'/public/img/'}/>
      </div>
    </header>
  )
}

export default Header