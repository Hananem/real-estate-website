import { FiArrowRight } from "react-icons/fi";
import House from "../images/house.png"
const NewsLetter = () => {
  return (
    <section className=" w-[90%] mx-auto flex flex-wrap -mt-[8rem] bg-[#C29470] h-fit sm:h-[250px] rounded-xl py-4 text-slate-100">
      <div className="flex-1 basis-[20rem]">
        <img
          src={House}
          alt=""
          className="w-[300px] lg:w-[420px] -mt-[13rem]"
        />
      </div>
      <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl text-primary font-bold capitalize">
            subscribe to our newsletter
          </h1>
          <p className="text-[#fff]/30">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            earum.
          </p>
        </div>
        <div className="mt-3">
          <div className="justify-center flex items-center gap-x-2 sm:justify-start">
            <input
              type="text"
              className="px-4 py-1 border-none bg-[#fff] rounded-md outline-none"
              placeholder="Email address..."
            />
            <button className="p-2 rounded-md btn-secondary">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;