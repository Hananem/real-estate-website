import AboutUs from "../components//AboutUs"
import Brands from "../components/Brands"
import Feed from "../components/Feed"
import WhatWeDo from "../components/WhatWeDo"
import Testimonial from "../components/Testimonial"

const About = () => {
    return (
      <div >
        <AboutUs />
        <WhatWeDo/>
        <Testimonial />
        <Brands />
        <Feed />
      </div>
    );
  };
  
  export default About;