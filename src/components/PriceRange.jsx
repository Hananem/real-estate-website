import React from "react";
import { useEffect, useState } from "react";
import priceRanges from  "../data/PriceData"


const PriceRange = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h3 className="font-semibold">Property Type</h3>
      {priceRanges .map(({ id, name, range }) => (
        <div key={id} className="mt-3 filter flex items-center justify-between ">
          <div className="input-radio">
            <input type="radio" name="price" id={name} />
            <label htmlFor={name} className="capitalize">
              {name}
            </label>
          </div>
          <p>({range})</p>
        </div>
      ))}
    </div>
  );
};

export default PriceRange;