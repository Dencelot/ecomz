import React from 'react'

const Picture = () => {
  return (
   <picture className='pict__desk'>
   <source srcSet={`/man-phone-woman.webp`} type="image/webp"></source>
   <source srcSet={`/man-phone-woman.png`} type="image/png"></source>
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