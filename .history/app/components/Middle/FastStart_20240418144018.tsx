import { data } from '@/app/data/data'
import React from 'react'
import FastArticle from './FastArticle'

const FastStart = () => {
   return (
      <div className='container sm:pt-[80px] pt-[56px] xl:pb-[120px] sm:pb-[60px] pb-[40px] relative z-[1] text-[var(--white-100)]'>
         <h2 className=' xl:mb-[90px] sm:mb-[60px] mb-[40px]  text-[32px] sm:text-[47px] xl:text-[60px] sm:leading-[1.08] leading-[1.19] flex items-start justify-start flex-col'>
            <span>
            {data.middle.title.white}
            </span>
            <span className='text-[var(--sunrise-100)]'>
            {data.middle.title.color}
            </span>
         </h2>
         {/* <div className='flex items-start justify-center -mx-[16px]'>
            {
               data.middle.texts.map(item=>(
                  <React.Fragment key={item.id}>
                     <FastArticle item={item}/>
                  </React.Fragment>
               ))
            }
         </div> */}
      </div>
   )
}

export default FastStart