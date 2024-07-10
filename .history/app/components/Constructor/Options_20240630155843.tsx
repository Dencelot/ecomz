
import React from 'react'

const Options = () => {
   return (
      <button className='px-[10px] flex items-center justify-between'>
         {filters[data.type].title}
         <Image className={'ml-2'} width={25} height={25} alt="arrow" src="/img/construcor/arrow.png"/>
      </button>
   )
}

export default Options