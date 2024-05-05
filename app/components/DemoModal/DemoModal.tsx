import Image from 'next/image'
import { DemoModalForm } from '../DemoModalForm/DemoModalForm'

export const DemoModal = () => {
  return (
    <section className='container h-svh mt-10 lg:mt-6 xl:mt-16'>
      <div className='flex items-end justify-between gap-x-8'>
        <div className='flex flex-col w-full'>
          <h1 className='mb-12 text-3xl lg:text-5xl 2xl:text-6xl bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text'>
            Запрос демо приложения
          </h1>
          <DemoModalForm />
        </div>
        <Image
          className='hidden lg:block'
          src={'/img/ninjaForm.svg'}
          alt='Ecomz'
          width={492}
          height={493}
        />
      </div>
    </section>
  )
}
