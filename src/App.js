import './App.css';
import Navbar from "./components/Navbar"
import HomePage2 from "./pages/HomePage2"
import HomePage1 from "./pages/HomePage1"
import HomePage3 from "./pages/HomePage3"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ServicesTwo from "./pages/ServicesTwo"
import About from "./pages/About"
import AboutTwo from "./pages/AboutTwo"
import Contact from "./pages/Contact"
import Faqs from "./pages/Faqs"
import Blog from "./pages/Blog"
import BlogTwo from "./pages/BlogTwo"
import BlogFour from "./pages/BlogFour"
import BlogThree from "./pages/BlogThree"
import OurTeam from "./pages/OurTeam"
import Property from "./pages/Property"
import PropertyTwo from "./pages/PropertyTwo"
import PropertyThree from "./pages/PropertyThree"
import PropertyFour from "./pages/PropertyFour"
import PropertyFive from "./pages/PropertyFive"
import PropertySix from "./pages/PropertySix"
import Portfolio from "./pages/Portfolio"
import PortfolioTwo from "./pages/PortfolioTwo"
import PageNotFound from "./pages/PageNotFound"
import NewsLetter from "./components/NewsLetter"
import UpButton from "./components/UpButton"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import {Routes, Route, useLocation} from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DropdownMenu from "./components/DropdownMenu";
import { closeDropdown } from "./slice/uiSlice";
import  property  from "./data/PropertyData";
import { getCurrentItems } from "./slice/dataSlice";

function App() {
  const route = useLocation();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

   // Loader when page is loading
   window.addEventListener("load", () => {
    setShowLoader(false);
  });

  
    // Show/Hide scroll to top button
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };
  return (
  <>
      {showLoader && <Loader />}

  <Navbar/>
  <DropdownMenu />

     <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home-2" element={<HomePage2/>}/>
<Route path="/home-3" element={<HomePage3/>}/>
<Route path="/about-us" element={<About />} />
<Route path="/about-2" element={<AboutTwo />} />
<Route path="/services" element={<Services />} />
<Route path="/services-2" element={<ServicesTwo />} />
<Route path="/contact" element={<Contact />} />
<Route path="/team" element={<OurTeam />} />
<Route path="/faqs" element={<Faqs />} />
<Route path="/blog" element={<Blog />} />
<Route path="/blog-2" element={<BlogTwo />} />
<Route path="/blog-3" element={<BlogThree />} />
<Route path="/blog-4" element={<BlogFour />} />
<Route path="/property" element={<Property />} />
<Route path="/property-2" element={<PropertyTwo />} />
          <Route path="/property-3" element={<PropertyThree />} />
          <Route path="/property-4" element={<PropertyFour />} />
          <Route path="/property-5" element={<PropertyFive />} />
          <Route path="/property-6" element={<PropertySix />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-2" element={<PortfolioTwo />} />
          <Route path="*" element={<PageNotFound />} />
</Routes>
  </div>
  <div className="bg-card-dark border border-card-dark mt-8" >
  <NewsLetter />
    <Footer/>
  </div>

    <UpButton showButton={showButton} />
  </>
  );
}

export default App;
