import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ name, role, image }) => {
    return(
<div className=" h-[260px] mb-[2rem] lg:mb-0">
<img src={image}  
className="object-cover w-full h-full rounded-lg"
alt="team"
/>
<div className="relative w-4/5 p-3 mx-auto text-primary hover:text-secondary text-center z-10 -mt-4 rounded-lg shadow-md bg-[#fff]">
<h4 className="text-[19px] font-semibold"> {name}  </h4>
<p > {role}  </p>

<div className="mt-3 flex items-center justify-center gap-x-3">
                  <Link className=" transition-a">
                    <FaFacebook />
                  </Link>
                  <Link className=" transition-a">
                    <FaInstagram />
                  </Link>
                  <Link className=" transition-a">
                    <FaTwitter />
                  </Link>
                  <Link className=" transition-a">
                    <FaLinkedin />
                  </Link>
                </div>
</div>
</div>
    )
}

export default TeamCard