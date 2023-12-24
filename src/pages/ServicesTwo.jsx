import Details from "../components/Details"
import ServicesFilter from "../components/ServicesFilter"


const ServicesTwo = () => {
    return (
        <section className="w-[90%] mx-auto pt-20  mb-[7rem]   ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-3">
            <Details />
          </div>
          <div className="md:col-span-1">
            <ServicesFilter />
          </div>
        </div>
      </section>
    )
   
}

export default ServicesTwo