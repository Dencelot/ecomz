'use client'

import { contactsData } from '@/app/data/contacts'
import Logo from '@/public/img/ecomz_logo_big.svg'
import Image from 'next/image'
import Link from 'next/link'
import { YandexMap } from '../YandexMap/YandexMap'

interface ContactsProps {
  active: boolean
}

export const Contacts = ({ active }: ContactsProps) => {
  return (
    <section
      className={`flex-auto w-full transition-all minH pt-[96px] md:pt-[120px] h-svh  fixed z-50 bg-[var(--bazalt-100)] ${
        active ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='relative flex pl-5 items-stretch justify-between gap-x-20 w-full h-full'>
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
          className='hidden lg:block absolute top-[224px] left-[400px]'
          src={Logo}
          alt='Ecomz logo'
          width={212}
          height={212}
        />
      </div>
    </section>
  )
}
