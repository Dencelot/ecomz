import Image from 'next/image'
import FastStart from './FastStart'

const Middle = () => {
  return (
    <section id='middle' className='relative  sm:mt-0 mt-[40px]'>
      <div className='bg-[var(--black-90)] absolute xl:top-[8vw] top-[100px] left-0 w-full xl:h-[calc(100%-8vw)] h-[calc(100%-100px)]'>
      </div>
      <Image className='absolute z-[1] top-0 left-0 w-full xl:object-contain xl:h-auto sm:h-[200px] xxs:h-[150px] h-[120px]' alt="bg" src={'/img/topsection.png'} width={2160} height={216}/>
      <FastStart/>
   </section>
  )
}

export default Middle