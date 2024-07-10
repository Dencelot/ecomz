import React from 'react'
import Image from 'next/image'

const Clickeds = ({data}:{data:any}) => {
   return (
      <button className='px-[10px] flex items-center justify-between'>
         {data.btn}
         
      </button>
   )
}

export default Clickeds