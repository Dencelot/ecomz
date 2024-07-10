import Demo from "./Demo"
import Filters from "./Filters"
import Phone from "./Phone"

const Constructor = () => {
   
   return (
      <section className='h-full container md:flex-nowrap flex-wrap  flex sm:justify-between justify-end pb-[60px]  md:pt-[60px] pt-[100px]'>
         <Filters/>
         <Phone/>
         <Demo/>
      </section>
   )
}

export default Constructor