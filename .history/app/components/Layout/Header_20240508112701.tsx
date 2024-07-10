import Image from 'next/image'
import Link from 'next/link'
import MenuCnt from './menuheader/MenuCnt'
const Header = () => {
  return (
    <header className='z-[9999] w-full md:sticky top-0 left-0 fixed  bg-[var(--black-07)] md:overflow-hidden'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0 backdrop-blur'>
        
      </div>
      <div className='z-[2] container h-[80px] md:h-[73px] pt-[24px] pb-[24px] flex items-center justify-between '>
        <Link href="/">
          <Image alt='Ecomz' className='md:h-[37px] h-[32px] md:w-[157px] w-[136px]'  width={157} height={37} src={'/img/ecomz_logo.svg'}/>
        </Link>

        <MenuCnt/>
      </div>
    </header>
  )
}

export default Header