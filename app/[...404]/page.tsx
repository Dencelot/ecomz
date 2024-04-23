import Image from 'next/image'
import Link from 'next/link'
import { page404 } from '../data/404'

const Page = () => {
  return (
    <main className='flex-auto w-full minH pt-[120px] md:pt-[160px] h-svh md:h-auto pb-14'>
      <div className='container flex flex-col items-center h-full'>
        <Image
          src={'/img/404.png'}
          alt='404'
          width={1566}
          height={486}
          className='mb-14 w-[232px] h-[72px] md:w-auto md:h-auto'
        />
        <div className='flex flex-col items-center flex-auto'>
          <h1 className='text-3xl md:text-6xl mb-3 bg-gradient-to-r from-[#f77e61]  to-[#f75064cc] inline-block text-transparent bg-clip-text text-center'>
            {page404.title}
          </h1>
          <p className='text-2xl text-white font-medium text-center text-balance'>
            {page404.text}
          </p>
        </div>
        <Link
          className='bg-white rounded-2xl py-4 px-10 mt-8 w-full text-center md:max-w-[181px]'
          href={'/'}
        >
          {page404.linkText}
        </Link>
      </div>
    </main>
  )
}

export default Page
