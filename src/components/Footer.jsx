import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
    return(
<footer className=" pt-[4rem]  text-[#fff] ">
   <article className="w-[90%] mx-auto flex flex-wrap gap-2">
    <div className="flex-1 basis-[180px]">
        <div className="flex items-center gap-x-2">
        <BiBuildingHouse className="text-3xl !text-primary" />
              <h1 className="hidden md:block">MartVilla</h1>
        </div>
        <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="gap-5 my-6 flex items-center justify-center">
                <div className="icon-box  text-[#fff] bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box text-[#fff] bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box text-[#fff] bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box text-[#fff] bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
    </div>
  
        
       <div className="flex-1 basis-[180px]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 ">
                <a href="#"> Order Tracking</a>
              </li>
              <li className="my-3 ">
                <a href="#">Whislist</a>
              </li>
              <li className="my-3 ">
                <a href="#">Terms of use</a>
              </li>
              <li className="my-3 ">
                <a href="#">Contact support</a>
              </li>
              <li className="my-3 ">
                <a href="#">2 year guarantee</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[180px]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 ">
                <a href="#"> About Us</a>
              </li>
              <li className="my-3 ">
                <a href="#">Services</a>
              </li>
              <li className="my-3 ">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 ">
                <a href="#">Portifolio</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[180px]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 ">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 ">
                <a href="#">Guide</a>
              </li>
              <li className="my-3 ">
                <a href="#">Mission</a>
              </li>
              <li className="my-3 ">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 ">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>
    

  <div className="flex-1 basis-[180px] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm ">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex items-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
    



   </article>
         <div className="py-2 mt-3 text-center border-t  border-dark">
        <p>
          Created By <span className="text-primary">MartVilla</span> | All
          Rights Reserved
        </p>
      </div>
</footer>
    )
}

export default Footer