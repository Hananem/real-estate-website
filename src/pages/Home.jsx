import Hero from "../components/Hero"

import FiltersSection from "../components/FiltersSection"
import Numbers from "../components/Numbers"
import Invest from "../components/Invest"
import Services from "../components/ServicesList"
import Featured from "../components/Featured"
import Brands from "../components/Brands"
import Projects from "../components/Projects"
import Feed from "../components/Feed"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return(
<>
<Hero />
      <FiltersSection />
      <Invest />
      <Services />
      <Featured />
      <Numbers/>
      <Projects />
      <Testimonial />
      <Brands />
      <Feed /> 
</>
    )
}

export default Home