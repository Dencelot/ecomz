'use client'
import React from 'react'

const Btn = ({text,classNames,children}:{children?:React.ReactNode,text?:string,classNames:string}) => {
   const openPopup = () =>{
      console.log('open')
   }
  return (
   <button onClick={openPopup} className={classNames}>
      {text ?? children}
   </button>
  )
}

export default Btn