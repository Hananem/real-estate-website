import Pagination from "../components/Pagination";

  import  PropertyGridList from "../components/PropertyGridList";
  import  property  from "../data/PropertyData";
  
  const PropertyFour = () => {
    return (
      <div className="w-[90%] mx-auto pt-16 mb-[8rem] ">
        <PropertyGridList textLength={120} showLabels />
        <Pagination itemsPerPage={6} pageData={property} />
      </div>
    );
  };
  
  export default PropertyFour;