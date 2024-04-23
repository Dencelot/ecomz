import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header>
      <div className='container'>
         <Image src={'/public/'}/>
      </div>
    </header>
  )
}

export default Header