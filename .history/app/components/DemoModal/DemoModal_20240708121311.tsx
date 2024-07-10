'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DemoModalForm } from '../DemoModalForm/DemoModalForm'
import { DemoSuccess } from '../DemoSuccess/DemoSuccess'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualModals } from '@/app/features/counter/chatKitSlice'

interface DemoModalProps {
  isDemo: boolean | undefined
  setOpened?: (val: boolean) => void
}

export const DemoModal = () => {
  const [isSubmited, setIsSubmited] = useState(false)
  const modals = useAppSelector(actualModals)

  if (isSubmited) return <DemoSuccess isDemo={modals.demo.isDemo} />

  return (
    <section className={`overflow-y-auto scrollCustom h-svh transition-[transform,opacity] duration-300  bg-[var(--bazalt-100)]  pt-[26px] fixed top-[] inset-0 z-50
    ${modals.demo.open ? 'translate-x-0' : 'translate-x-full opacity-0'}
    `}>
      <div className='container flex items-end justify-between gap-x-8'>
        <div className='flex flex-col w-full'>
          <h2 className='mb-12 text-3xl lg:text-5xl 2xl:text-6xl bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text'>
            {modals.demo.isDemo ? 'Запрос демо приложения' : 'Заявка на консультацию'}
          </h2>
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
