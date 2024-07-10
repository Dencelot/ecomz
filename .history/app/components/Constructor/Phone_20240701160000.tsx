'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Phone = () => {
   const[time,setTime] = useState('')
   const setTimeFunc = () =>{
      let date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      let t = h + ':' + (+m>=10?m:'0'+m)
      setTime(t)
   }
   useEffect(()=>{
      setTimeFunc()

      let t = setInterval(()=>{
         setTimeFunc()
      },10000)
      return ()=> clearInterval(t)
   },[])
   return (
      <div className={`xl:px-[56px] px-[20px] flex-none xl:w-[510px] w-[340px] relative text-[var(--bazalt-100)]`}>
         <div className=' absolute z-0 xl:left-[56px] xl:right-[56px] left-[20px] right-[20px]'>
            <Image className='h-auto w-full' quality={100} alt="phone" src={"/img/construcor/phone.png"} width={800} height={1625}/>
         </div>
         <div className={`z-[1] flex items-center justify-center text-[13px] font-[900] font-[var(--third-family)]  absolute left-[90px] top-[20px] w-[50px] h-[20px] bg-[var(--sunrise-100)]`}>
            {time}
         </div>
         <div className={`rounded-[5px] px-[12px]`}>
            <p>
               Поиск по названию или категории
            </p>
         </div>
      </div>
   )
}

export default Phone