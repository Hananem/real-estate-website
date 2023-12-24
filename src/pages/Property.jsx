import  Pagination  from "../components/Pagination";
import  PropertyList from "../components/PropertyList";
import property from "../data/PropertyData"
const Property = () => {

  return (
    <div className="w-[90%] mx-auto pt-16 mb-[8rem] ">
      <PropertyList basis="basis-[26rem]" />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default Property;
