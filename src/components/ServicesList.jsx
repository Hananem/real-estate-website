import ServiceCard from "./ServiceCard"

import { FiHeadphones } from "react-icons/fi";
import {
  BiBuildingHouse,
  BiFullscreen,
  BiHomeAlt,
  BiShieldAlt2,
} from "react-icons/bi"
import {FaPaintRoller} from "react-icons/fa";
const ServicesList = () => {
    return(
       <section className=" w-[90%] mx-auto  my-[6rem] ">
       <div className="heading">
        <span className="subtitle">SERVICES</span>
        <h2 className="title">specialists services provided in this apartment building</h2>
       </div> 
       <article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
         <ServiceCard icon=<BiBuildingHouse className="text-2xl" /> title={"luxury apartment"} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
         <ServiceCard icon=<BiFullscreen className="text-2xl"/>  title={"architectural design"} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
         <ServiceCard icon=<BiShieldAlt2 className="text-2xl"/> title={"extra security"} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
         <ServiceCard icon=<BiHomeAlt className="text-2xl"/> title={"Home remodelling"} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
         <ServiceCard icon=<FaPaintRoller className="text-2xl"/> title={"office renovation"}text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
         <ServiceCard icon=<FiHeadphones className="text-2xl"/> title={"24/7 support"} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."}  />
       </article>
       </section>
    )
}

export default ServicesList