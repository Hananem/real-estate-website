import Pagination from "../components/Pagination";
import  PropertyList  from "../components/PropertyList";
import  property  from "../data/PropertyData";

const PropertyTwo = () => {
  return (
    <div className="w-[90%] mx-auto pt-16 mb-[8rem] ">
      <PropertyList />
      <Pagination itemsPerPage={9} pageData={property} />
    </div>
  );
};

export default PropertyTwo;