import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/app/app/hooks'

const Clickeds = ({data}:{data:any}) => {
   const filters = useAppSelector(act)
   return (
      <button className='px-[10px] flex items-center justify-between'>
         {data.btn}

      </button>
   )
}

export default Clickeds