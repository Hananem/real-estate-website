import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";
import  Img from "../images/property19.png"
import  Img2 from "../images/property1.png"

const AboutUs = () => {
  return (
    <section className=" w-[90%]  mx-auto pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src={Img}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src={Img2}
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="subtitle">ABOUT US</h1>
          <h1 className="title">We Decorate Your Home Environment</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            earum saepe quibusdam, temporibus aut sapiente, ea alias libero,
            ipsam perferendis. Consectetur maiores, dicta.
          </p>
          <div className="mt-4">
            <div className="flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  the perfect residency
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  global architect experts
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  total payment transparency
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
