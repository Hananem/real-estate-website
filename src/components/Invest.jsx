import { FiArrowRight, FiHome } from "react-icons/fi";
import Person11  from "../images/person11.png"
import Person12  from "../images/person12.png"
import Person13  from "../images/person13.png"
import Person14  from "../images/person14.png"
import Person15  from "../images/person15.png"
const Invest = () => {
  return (
    <div className=" w-[90%] mx-auto mt-[6rem]">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src={Person11 }
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="relative flex flex-col gap-5 p-5 md:col-span-2 bg-[#C29470] text-[#dcfce7]  items-center md:flex-row">
          <div className="flex-shrink-0 p-3 -mt-16 rounded-lg bg-[#fff]/80 backdrop-blur-sm dark:bg-dark-light/60 sm:-ml-72 md:-ml-20 sm:mt-0">
            <div className="flex-shrink-0 flex items-center">
              <img
                src={Person12 }
                alt=""
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <img
                src={Person13 }
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-[#fff] rounded-full dark:border-dark"
              />
              <img
                src={Person14 }
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-[#fff] rounded-full dark:border-dark"
              />
              <img
                src={Person15 }
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-[#fff] rounded-full dark:border-dark"
              />
              <div className="grid flex-shrink-0 w-8 h-8 -ml-2 text-[#fff] border-2 border-[#fff] rounded-full bg-primary place-items-center dark:border-dark">
                <h1>+5</h1>
              </div>
            </div>
            <h1 className="mt-2 text-secondary dark:text-[#86efac]">
              People Successfull Getting Homes
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              You invest in the apartment of your choice
            </h1>
            <div className="mt-5 flex items-center gap-x-3">
              <div className="px-3 py-2 bg-[#fff] rounded-lg flex items-center gap-x-2 dark:bg-dark-light ">
              <FiHome className="text-[#15803d] dark:text-[#86efac]" />
               
                <input
                  type="text"
                  className=" outline-none text-[#15803d] dark:text-[#86efac]"
                  placeholder="Find your home..."
                />
              </div>
              <button className="px-2 py-2 rounded-md btn-primary">
              <FiArrowRight />

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
