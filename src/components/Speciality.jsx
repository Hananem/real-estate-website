import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";
import Img from "../images/hero2.png"
const Speciality = () => {
  return (
    <section className="w-[90%] mx-auto my-[7rem]">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[20rem]">
        <div className="heading">
        <span className="subtitle">about us</span>
          <h1 className="title">we specialize in quality home renovations</h1>
        </div>

          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            earum saepe quibusdam, temporibus aut sapiente, ea alias libero,
            ipsam perferendis. Consectetur maiores, dicta, earum eaque facilis
            adipisci dignissimos optio fuga officia itaque quo impedit.
          </p>
          <div className="mt-4">
            <div className="flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Outstanding Property</p>
            </div>
            <div className="mt-2 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Professional and experienced human resource</p>
            </div>
            <div className="mt-2 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Provide the best services for users</p>
            </div>
            <div className="mt-2 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Modern city locations and exceptional lifestyle</p>
            </div>
            <button className="mt-4 btn btn-primary">read more</button>
          </div>
        </div>
        <div className="flex-1 basis-[20rem]">
          <div className="relative">
            <img
              src={Img}
              alt=""
              className="rounded-lg w-full sm:h-[400px] object-cover"
            />
            <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20">
              <div className="p-3 bg-[#fff] rounded-lg shadow-md w-72 flex items-center gap-x-3 dark:bg-dark-light">
                <h1>We have been serving our customers for over 70 years</h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiUsers />
                </div>
              </div>
              <div className="p-3 mt-4 ml-8 bg-[#fff] rounded-lg shadow-md w-72 flex items-center gap-x-3 dark:bg-dark-light">
                <h1>
                  Working with the symbol and reputation of trustworthy trait
                </h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;