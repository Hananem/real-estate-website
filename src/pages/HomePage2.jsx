
import Search from "../components/Search"
import Hero2 from "../components/Hero2"
import FiltersSection from "../components/FiltersSection"
import Featured from "../components/Featured"
import Projects from "../components/Projects"
import Feed from "../components/Feed"
import WhatWeDo from "../components/WhatWeDo"
import Testimonial from "../components/Testimonial"

const HomePage2 =() => {
    return(
<>
        <Hero2 />
      <FiltersSection />
      <Projects />
      <WhatWeDo />
      <Featured />
      <Search />
      <Testimonial />
      <Feed />
</>
    )
}

export default HomePage2