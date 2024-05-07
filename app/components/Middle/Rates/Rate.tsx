import { data } from '@/app/data/data'
import Image from 'next/image'
import React from 'react'
import Btn from '../../Button/Btn'

const Rate = ({item}:{item:any}) => {
  return (
   <div className={` md:m-[16px] flex-auto z-[1]  relative m-[12px] pt-[70px] xl:max-w-[435px] ${item.id===2?'md:translate-y-[50px]':''}`}>

      <article className={` 2xl:p-[40px] p-[20px] 2xl:pt-0 pt-[0] rounded-[24px] ${item.id===3?'bg-[var(--black-40)]':'bg-[var(--black-20)]'}`}>
         <Image className={`left-[49px] absolute top-0 ${item.id===3?'':'w-[144px] h-auto'}`} width={160} height={160} quality={100} alt={item.title} src={item.img}/>
         {
            item.hit&&
            <div className='absolute top-[70px] right-0 bg-[var(--sunrise-30)] rounded-bl-[24px] rounded-tr-[24px] w-[77px] h-[58px] flex items-center justify-center'>
               <span className='text-[18px] text-[var(--sunset-100)]'>
                  HIT
               </span>
            </div>
         }
         <h3 className='relative z-[1] pt-[40px] block leading-[1.2] 2xl:text-[45px] xl:text-[36px] text-[30px] mb-[24px] ml-[180px]'>
            {item.title}
         </h3>
         <p className='text-[var(--black-50)] text-[18px] leading-[1.4] 2xl:text-[18px] text-[15px] mb-[8px]'>
            {item.subtitle}
         </p>
         <ul>
            {
               data.middle.rates.links.map(link=>(
                  <li key={link.id} className='leading-[1.4] 2xl:text-[25px]  text-[20px] py-[8px] relative pl-[38px]'>
                     <span className={`2xl:top-[20px]  top-[18px] ${link.active.includes(item.id) ?'bg-[var(--sunrise-100)]':'border-[2px] border-solid border-[var(--black-50)]'} absolute left-[8px] h-[10px] w-[10px] rounded-full `}>

                     </span>
                     {link.text}
                  </li>
               ))
            }
         </ul>
         
         <Btn text={data.middle.rates.btn} classNames={' mt-[40px] text-[18px] text-[var(--white-100)] relative z-[2] transition-colors hover:bg-[var(--black-90)] flex items-center justify-center h-[66px] w-full rounded-[20px] bg-[var(--bazalt-100)]'}/>
      </article>
   </div>

  )
}

export default Rate