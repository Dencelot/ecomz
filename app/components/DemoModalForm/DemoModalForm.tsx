'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../Button/Button'

const initialData = {
  name: '',
  mail: '',
  phone: '',
}

interface DemoModalFormProps {
  setIsSubmited: (value: boolean) => void
}

export const DemoModalForm = ({ setIsSubmited }: DemoModalFormProps) => {
  const [data, setData] = useState(initialData)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
    setData(initialData)
    setIsSubmited(true)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const isBtnDisabled = !data.name || !data.mail || !data.phone

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-y-12 w-full'>
      <div className='flex flex-col'>
        <label className='text-white text-xl' htmlFor='name'>
          Имя
        </label>
        <input
          onChange={handleInputChange}
          value={data.name}
          className='bg-transparent border-b border-solid border-[var(--white-02)] text-white py-3'
          type='text'
          id='name'
          name='name'
          placeholder='Иван'
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-white text-xl' htmlFor='mail'>
          E-mail
        </label>
        <input
          value={data.mail}
          onChange={handleInputChange}
          className='bg-transparent border-b border-solid border-[var(--white-02)] text-white py-3'
          type='email'
          id='mail'
          name='mail'
          placeholder='ivan@domain.ru'
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-white text-xl' htmlFor='phone'>
          Мобильный телефон
        </label>
        <input
          value={data.phone}
          onChange={handleInputChange}
          className='bg-transparent border-b border-solid border-[var(--white-02)] text-white py-3'
          type='tel'
          id='phone'
          name='phone'
          placeholder='+7 (921) 123-45-67'
        />
      </div>
      <div className='flex flex-col items-start lg:items-center lg:flex-row gap-x-8'>
        <Button disabled={isBtnDisabled} type='submit'>
          Отправить заявку
        </Button>
        <p className='text-[var(--white-06)] text-lg'>
          Нажимая на кнопку, я соглашаюсь на{' '}
          <Link
            className='bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text'
            href={'#'}
          >
            обработку персональных данных
          </Link>
        </p>
      </div>
    </form>
  )
}
