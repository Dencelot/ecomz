import React from 'react'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
         { type === 'clicked' &&
            <p className='fon'>
               {data.title}
            </p>
         }
      </div>
   )
}

export default Select