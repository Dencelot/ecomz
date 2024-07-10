import Image from 'next/image'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '@/app/app/hooks'
import { actualModals, addModals } from '@/app/features/counter/chatKitSlice'

interface DemoSuccessProps {
  isDemo: boolean | undefined
  setIsOpened?: (val: boolean) => void
}

export const DemoSuccess = ({ isDemo }: DemoSuccessProps) => {
  const dispatch = useAppDispatch()
  const modals = useAppSelector(actualModals)
  return (
    <section className={` h-svh transition-[transform,opacity] minH bg-[var(--bazalt-100)] mt-10 pt-[96px] fixed inset-0 z-50
    ${modals.demo.open ? 'translate-x-0' : 'translate-x-full opacity-0'}
    `}>
      <div className='flex items-stretch container'>
        <Image
          className='hidden lg:block'
          src={'/img/ninjaSuccess.svg'}
          alt='Ecomz'
          width={648}
          height={565}
        />
        <div className='flex flex-col'>
          <Image
            className='block lg:hidden mb-12'
            src={'/img/ninjaSuccess.svg'}
            alt='Ecomz'
            width={96}
            height={94}
          />
          <h1 className='mb-14 text-3xl lg:text-5xl 2xl:text-6xl bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text'>
            {isDemo
              ? 'Заявка на демо отправлена'
              : 'Заявка на консультацию отправлена'}
          </h1>
          <div className='flex-1'>
            <p className='mb-7 text-[var(--white-100)] text-2xl 2xl:text-4xl'>
              Спасибо за обращение!
            </p>
            <p className='text-[var(--white-100)] text-2xl 2xl:text-4xl'>
              {isDemo
                ? 'В ближайшее время мы свяжемся с вами для уточнения деталей и демонстрации возможностей приложения.'
                : 'В ближайшее время мы свяжемся с вами.'}
            </p>
          </div>
          <Button onClick={() => dispatch(addModals({contacts:false,demo:{open:false,isDemo:isDemo ?? false}}))} className='mt-8'>Понятно</Button>
        </div>
      </div>
    </section>
  )
}
