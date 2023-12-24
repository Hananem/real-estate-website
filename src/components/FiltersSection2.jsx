import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const FiltersSection = () => {
  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt-16 sm:-mt-28  text-[#fff]">
      <div className="bg-main-dark dark:bg-black/30  sm:!bg-[#000]/30 backdrop-blur-sm p-4 border border-[#3e4c5a] rounded-lg text-text-[#f1f5f9]">
        <h1 className="text-lg font-bold">Search the price your looking for</h1>
        <div className="z-40 flex-col mt-4 gap-x-4 flex justify-between gap-y-4 md:gap-y-0 md:flex-row ">
          <div className="flex-col flex-1 w-full flex items-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  dark:bg-hover-color-dark md:!transparent">
              <h1 className="font-bold">Location</h1>
              <div className="flex items-center gap-x-2">
                <BiMap />
                <input
                  type="text"
                  className="w-full"
                  placeholder="Enter location"
                />
              </div>
            </div>
            <div className="h-10 w-[1px] bg-[#cbd5e1] hidden md:block dark:bg-dark-light "></div>
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  dark:bg-hover-color-dark md:!transparent">
              <h1 className="font-bold">Property Type</h1>
              <div className="flex items-center gap-x-2">
                <BiBuildings />
                <select
                  name=""
                  id=""
                  className="w-full transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!transparent"
                >
                  <option value="condors">Condos</option>
                  <option value="office buildings">Office Buildings</option>
                  <option value="apartments">Apartments</option>
                  <option value="mansions">Mansions</option>
                  <option value="real estate">Real Estate</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="living room">Living Room</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-[#cbd5e1] hidden md:block dark:bg-dark-light "></div>
          <div className="flex-col flex-1 w-full flex items-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  dark:bg-hover-color-dark md:!transparent">
              <h1 className="font-bold">Price range</h1>
              <div className="flex items-center gap-x-2">
                <BiMoney />
                <select
                  name=""
                  id=""
                  className="w-full transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!transparent"
                >
                  <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                  <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                  <option value="$120,000 - $200,000">
                    $120,000 - $200,000
                  </option>
                  <option value="$200,000 - $300,000">
                    $200,000 - $300,000
                  </option>
                  <option value="$300,000 - $500,000">
                    $300,000 - $500,000
                  </option>
                  <option value="$500,000 - $1000,000">
                    $500,000 - $1000,000
                  </option>
                </select>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-[#cbd5e1] hidden md:block dark:bg-dark-light "></div>
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  dark:bg-hover-color-dark md:!transparent">
              <h1 className="font-bold">For</h1>
              <div className="flex items-center gap-x-2">
                <BiBriefcase />
                <select
                  name=""
                  id=""
                  className="w-full transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!transparent"
                >
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-full btn btn-primary md:w-fit">search</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;