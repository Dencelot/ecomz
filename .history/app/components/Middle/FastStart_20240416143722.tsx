import { data } from '@/app/data/data'
import React from 'react'

const FastStart = () => {
   return (
      <div className='container pt-[40px] pb-[120px]'>
         <h2>
            <span>
            {data.middle.title.white}
            </span>
            <span>
            {data.middle.title.color}
            </span>
         </h2>
      </div>
   )
}

export default FastStart