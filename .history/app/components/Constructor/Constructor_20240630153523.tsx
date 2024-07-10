import Demo from "./Demo"
import Filters from "./Filters"

const Constructor = () => {
   
   return (
      <section className='container md:flex justify-between pb-[60px]  md:pt-[60px] pt-[100px]'>
         <Filters/>
         <Demo/>
      </section>
   )
}

export default Constructor