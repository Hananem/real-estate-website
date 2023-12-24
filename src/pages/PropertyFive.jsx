import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import  CTA from "../components/CTA";
import Pagination from "../components/Pagination";
import SocialIcons from "../components/SocialIcons"
import HeaderFilters from "../components/HeaderFilters";
import Type from "../components/Type";
import AdvancedSearch from "../components/AdvancedSearch";
import   PropertyFullWidth  from "../components/PropertyFullWidth";
import  PropertyList  from "../components/PropertyList";
import  property  from "../data/PropertyData";
import PriceRange from "../components/PriceRange"
import { closeFilterMenu, uiStore } from "../slice/uiSlice";
const PropertyFive = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [layout, setLayout] = useState("grid");

  return (
    <div className="w-[90%] mx-auto pt-16 mb-[8rem] ">
      <HeaderFilters layout={layout} setLayout={setLayout} />
      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={8} pageData={property} />
        </div>
        <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex items-center justify-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch />
              <Type />
              <PriceRange />
              <SocialIcons />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFive;