import Demo from "./Demo"
import Filters from "./Filters"
import Phone from "./Phone"

const Constructor = () => {
   
   return (
      <section className='h-full container md: flex-wrap flex-col md:items-start items-end flex justify-between pb-[60px]  md:pt-[60px] pt-[100px]'>
         <Filters/>
         <Phone/>
         <Demo/>
      </section>
   )
}

export default Constructor