import React from 'react'
import Options from './Options'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
            <p className='text-[20px]'>
               {data.title}
            </p>
            {
               type === 'clicked'
               ?
               <Cli/>
               :
               <Options/>
            }
      </div>
   )
}

export default Select