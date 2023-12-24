
  import Pagination from "../components/Pagination";
import  property  from "../data/PropertyData";
import   PropertyFullWidth  from "../components/PropertyFullWidth";

  const PropertyThree = () => {
    return (
      <div className="w-[90%] mx-auto pt-16 mb-[8rem] ">
        <PropertyFullWidth />
        <Pagination itemsPerPage={6} pageData={property} />
      </div>
    );
  };
  
  export default PropertyThree;