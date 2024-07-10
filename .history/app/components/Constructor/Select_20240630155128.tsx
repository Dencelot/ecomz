import React from 'react'
import Options from './Options'
import Clickeds from './Clickeds'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
            <p className='text-[20px]'>
               {data.title}
            </p>
            {
               type === 'clicked'
               ?
               <Clickeds />
               :
               <Options/>
            }
      </div>
   )
}

export default Select