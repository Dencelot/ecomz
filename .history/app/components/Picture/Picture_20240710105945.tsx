import React from 'react'
import Image from 'next/image'
const Picture = ({className,width<hei}) => {
   return (
      <picture className='pict__desk'>
         <source srcSet={`/man-phone-woman.webp`} type="image/webp"></source>
         <Image
            className='w-full'
            src={`/man-phone-woman.webp`}
            width={640}
            height={640}
            alt='Мужчина и женщина общаются'
         />
      </picture>
   )
}

export default Picture