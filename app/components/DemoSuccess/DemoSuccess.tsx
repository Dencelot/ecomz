import Image from 'next/image'
import { Button } from '../Button/Button'

interface DemoSuccessProps {
  isDemo: boolean
}

export const DemoSuccess = ({ isDemo }: DemoSuccessProps) => {
  return (
    <section className='container h-svh pt-[96px]'>
      <div className='flex items-stretch'>
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
          <Button className='mt-8'>Понятно</Button>
        </div>
      </div>
    </section>
  )
}
