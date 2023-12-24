import { BiPlay } from "react-icons/bi";
import  Img from "../images/hero3.png"

const Hero3 = () => {
    return(
<section  className="px-[5%] relative bg-main-dark z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex items-center ">
    <article className="flex-1 basis-[300px]">
    <h1 className="text-4xl font-bold capitalize lg:text-5xl  text-[#e2e8f0]">
          find your dream <br /> home right away
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p className="text-[#f1f5f9] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
        </div>
        <div className="mt-6 flex items-center  gap-x-3">
          <button className="btn btn-primary">find property</button>
          <button className="icon-box !opacity-100 text-[#fff] relative before:w-full before:absolute before:h-full before:rounded-full before:bg-[#ed9887] hover:!bg-[#ed2f09] before:animate-ping bg-[#b33015]">
            <BiPlay />
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg sm:cursor-pointer flex items-center justify-between shadow w-fit">
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
    <article className="flex-1 basis-[250px]">
    <img
          src={Img}
          alt=""
          className="w-full h-fit  sm:h-[100vh] object-cover"
        />
    </article>

</section>
    )
}


export default Hero3