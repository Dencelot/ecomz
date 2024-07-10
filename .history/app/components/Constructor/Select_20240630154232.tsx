import React from 'react'

const Select = ({type,data}:{type:string,data:any}) => {
   return (
      <div>
         { type === 'colors' &&
            <p>
               {data.title}
            </p>
         }
      </div>
   )
}

export default Select