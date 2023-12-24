import React from "react";



const AdvancedSearch = () => {

    return (
      <div className="p-3 border dark:border-dark">
        <h1 className="font-semibold">Advanced Search</h1>
        <div className="mt-3">
          <select name="" id="" className="w-full px-3 py-2 border outline-none dark:border-dark bg-[#f1f5f9] dark:bg-dark-light" >
            <option value="">Categories</option>
            <option value="condors">Condos</option>
            <option value="office buildings">Office Buildings</option>
            <option value="apartments">Apartments</option>
            <option value="mansions">Mansions</option>
            <option value="real estate">Real Estate</option>
            <option value="penthouse">Penthouse</option>
            <option value="living room">Living Room</option>
          </select>
        </div>
        <div className="mt-3">
        <input type="range" 

      />
        </div>
        <div className="mt-3">
          <select name="" id="" className="w-full px-3 py-2 border outline-none dark:border-dark bg-[#f1f5f9] dark:bg-dark-light" >
            <option value="">Purpose</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="gap-2 mt-3 flex align-center">
          <select name="" id="" className="w-full px-3 py-2 border outline-none dark:border-dark bg-[#f1f5f9] dark:bg-dark-light" >
            <option value="">Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">Above 4</option>
          </select>
          <select name="" id="" className="w-full px-3 py-2 border outline-none dark:border-dark bg-[#f1f5f9] dark:bg-dark-light"  >
            <option value="">Beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button className="btn bg-secondary w-full mt-4 text-[#daf5e2] !rounded-none">
          search property
        </button>
      </div>
    );
  };
  
  export default AdvancedSearch;