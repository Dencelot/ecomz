import React from 'react'
import Options from './Options'
import Clickeds from './Clickeds'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
            <p className='text-[20px] mt-[18px]'>
            </p>
            {
               type === 'clicked'
               ?
               <Clickeds data={data}/>
               :
               <Options data={data}/>
            }
      </div>
   )
}

export default Select