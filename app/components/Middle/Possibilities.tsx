import { data } from '@/app/data/data'
import React from 'react'
import PosTitle from './PosTitle'
import Slider from './Sliders/Slider'
import FirstSlider from './Sliders/FirstSlider'
import SecondSlider from './Sliders/SecondSlider'
import ThirdSlider from './Sliders/ThirdSlider'
import Btn from '../Button/Btn'

const Possibilities = () => {
   return (
      <section id="possibilities" className='container  relative py-[60px]'>
         <div className='bg-[var(--black-10)] absolute z-0 h-full top-0 right-[0px] left-[0px] rounded-[64px]'>

         </div>
         <div className='relative z-[1]'>
            <h2 className="text-[var(--sunset-100)] xl:mb-[60px] mb-[40px] font-[500] 2xl:text-[105px] md:text-[64px] xs:text-[54px] text-[38px] leading-[100%]">
               {data.middle.possibilities.title}
            </h2>
            <article>
               <PosTitle item={data.middle.possibilities.first}/>
               <FirstSlider/>
            </article>
            <article className='xl:mt-[120px] mt-[60px]'>
               <PosTitle item={data.middle.possibilities.second}/>
               <SecondSlider/>

            </article>
            <article className='xl:mt-[120px] mt-[60px]'>
               <PosTitle item={data.middle.possibilities.third}/>
               <ThirdSlider/>
            </article>
            <Btn isDemo text={data.middle.possibilities.btn} classNames={'2xl:mt-[32px] md:mt-[24px] mt-[20px] xs:text-[32px] text-[24px] leading-[1.3] text-[var(--white-100)] md:rounded-[20px] rounded-[30px] md:py-[45px] py-[19px] bg-[var(--bazalt-100)] w-full transition-colors hover:bg-[var(--black-90)]'}/>

         </div>
      </section>
   )
}

export default Possibilities