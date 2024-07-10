import React from 'react'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
            <p className='text-[20px]'>
               {data.title}
            </p>
            {
               type === 'clicked'
            }
      </div>
   )
}

export default Select