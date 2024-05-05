'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DemoModalForm } from '../DemoModalForm/DemoModalForm'
import { DemoSuccess } from '../DemoSuccess/DemoSuccess'

interface DemoModalProps {
  isDemo: boolean
}

export const DemoModal = ({ isDemo }: DemoModalProps) => {
  const [isSubmited, setIsSubmited] = useState(true)

  if (isSubmited) return <DemoSuccess isDemo={isDemo} />

  return (
    <section className='container h-svh mt-10 pt-[96px]'>
      <div className='flex items-end justify-between gap-x-8'>
        <div className='flex flex-col w-full'>
          <h1 className='mb-12 text-3xl lg:text-5xl 2xl:text-6xl bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text'>
            {isDemo ? 'Запрос демо приложения' : 'Заявка на консультацию'}
          </h1>
          <DemoModalForm setIsSubmited={setIsSubmited} />
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
