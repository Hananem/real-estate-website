import { FiArrowRight } from "react-icons/fi";
import  Img from "../images/hero2.png"


const Hero2  = () => {
    return(
<section className="w-[90%] mx-auto relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex items-center ">
<div className="absolute top-0 right-0 rounded-full bg-[#ebad1e]/30 dark:bg-[#ebad1e]/50 w-72 h-72 -z-10 blur-[120px]"></div>
   
    <article className="flex-1 basis-[300px]">
    <h1 className="text-4xl font-bold capitalize md:text-5xl ">
          find your dream <br /> home right away
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between  gap-x-3">
          <button className="btn btn-primary">find property</button>
          <button className="px-2 py-2 rounded-md btn-secondary">
            <FiArrowRight />
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg sm:cursor-pointer flex items-center justify-between shadow dark:shadow-none w-fit dark:bg-card-dark">
          <div className="px-3 py-1 bg-primary">
            <span className="text-[#fff]">Buy</span>
          </div>
          <div className="px-3 py-1 bg-[#e7cdc6]">
            <span>Rent</span>
          </div>
          <div className="px-3 py-1 bg-[#e7cdc6]">
            <span>Sell</span>
          </div>
        </div>
    </article>
    <article className="flex-1 basis-[300px] h-full">
    <img
          src={Img}
          alt=""
          className="w-full h-fit  md:h-[80vh] rounded-xl object-cover"
        />
    </article>
</section>
    )
}

export default Hero2