'use client'

import { contactsData } from '@/app/data/contacts'
import Logo from '@/public/img/ecomz_logo_big.svg'
import Image from 'next/image'
import Link from 'next/link'
import { YandexMap } from '../YandexMap/YandexMap'
import { useAppSelector } from '@/app/app/hooks'
import { actualModals } from '@/app/features/counter/chatKitSlice'


export const Contacts = () => {
  const modals = useAppSelector(actualModals)
  return (
    <section
      className={`flex-auto w-full transition-[transform,opacity] duration-300  pt-[96px] md:pt-[120px] h-svh  fixed z-50 bg-[var(--bazalt-100)] ${
        modals.contacts ? 'translate-x-0' : 'translate-x-full opacity-0'
      }`}
    >
      <div className='relative flex 2xl:pl-5 sm:pl-[40px] pl-[20px] sm:pr-0 pr-[20px] items-stretch justify-between gap-x-20 w-full h-full'>
        <div className='text-white pb-14 flex flex-col lg:justify-between w-full lg:min-w-[430px] lg:max-w-[432px] lg:max-h-[646px]'>
          <div className='block lg:hidden mb-5 lg:mb-0'>
            <Image src={Logo} alt='Logo' width={92} height={92} />
          </div>
          <div className='flex flex-col items-start flex-1 lg:flex-none'>
            <h1 className='text-4xl lg:text-5xl leading-[120%] mb-4'>
              {contactsData.title}
            </h1>
            <p className='text-xl lg:text-2xl'>{contactsData.text}</p>
          </div>
          <ul className='flex flex-col gap-y-4'>
            <li>
              <Link
                target='_blank'
                className='lg:text-3xl'
                href={contactsData.mailLink}
              >
                {contactsData.mail}
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                className='lg:text-3xl'
                href={contactsData.phoneLink}
              >
                {contactsData.phone}
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                className='lg:text-3xl'
                href={contactsData.addressLink}
              >
                {contactsData.address}
              </Link>
            </li>
          </ul>
          <p className='lg:text-lg text-[var(--black-50)] mt-6'>{`© ${new Date().getFullYear()}, ecomz`}</p>
        </div>
        <YandexMap />
        <Image
          className='hidden lg:block absolute top-[224px] 2xl:left-[400px] left-[420px]'
          src={Logo}
          alt='Ecomz logo'
          width={212}
          height={212}
        />
      </div>
    </section>
  )
}
