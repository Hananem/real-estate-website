import { Link } from "react-router-dom";
import {
    FaBehance,
    FaDribbble,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaVimeo,
    FaYoutube,
  } from "react-icons/fa";


const SocialIcons = () => {
    return (
      <div className="p-3 mt-8 border dark:border-dark">
        <h1 className="font-semibold">Social Media</h1>
        <div className=" flex flex-wrap gap-2 mt-3 flex- items-center">
        
          
               
                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                  <FaFacebook />
                </Link>
                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                  <FaInstagram />
                </Link>
                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                  <FaTwitter />
                </Link>
                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                  <FaLinkedin />
                </Link>

                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
           <FaBehance />
                 
                </Link>

                <Link className="icon-box bg-[#f1f5f9] dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                <FaDribbble />
                </Link>

                <Link className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                <FaYoutube />
                </Link>

                <Link className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-[#fff]">
                <FaVimeo />

                </Link>
           
        </div>
      </div>
    );
  };
  
  export default SocialIcons;