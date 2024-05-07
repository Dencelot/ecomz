import React from 'react'
import Image from 'next/image'

const PosTitle = ({item}:{item:any}) => {
  return (
    <div className='flex items-center justify-between mb-[20px] w-full overflow-hidden '>
      <h3 className='w-fit sm:whitespace-nowrap leading-[1.1] xl:text-[60px] md:text-[47px] text-[32px] text-[var(--black-90)]'>
         {item.title}
      </h3>
      <Image className='mx-[32px] flex-none' width={96} height={96} quality={100} alt={item.title} src={item.img}/>
      <div className='flex-1 sm:flex items-center hidden h-[102px] overflow-hidden'>
      <Image className=' w-full' width={937} height={102} quality={100} alt={item.title} src={'/img/middle/line.png'}/>
      </div>
      
    </div>
  )
}

export default PosTitle