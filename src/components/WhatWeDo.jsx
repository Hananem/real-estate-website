import {
    BiBuildings,
    BiHomeAlt,
    BiMoney,
  } from "react-icons/bi";
import WhatWeDoCard from "./WhatWeDoCard"

const WhatWeDo = () => {
    return(
        <section className="w-[90%] mx-auto mt-[5rem]">
  <div className="heading">
        <span className="subtitle">WHAT WE DO</span>
        <h2 className="title">our main focus your property grow</h2>
      </div>

      <article  className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
      <WhatWeDoCard name={"Buy a New Home"} icon=<BiHomeAlt/> text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} />
      <WhatWeDoCard name={"Sell a Home"} icon=<BiMoney/> text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} />
      <WhatWeDoCard name={"Rent a Home"} icon=<BiBuildings/> text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} />
      </article>
        </section>
    )
}

export default WhatWeDo