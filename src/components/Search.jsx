import { FaPlay } from "react-icons/fa";
import img from '../images/property15.png'
const Search =() => {
    return(
<section 

className="w-[90%] mx-auto flex items-center flex-wrap gap-3 relative max-h-40  my-[7rem]">
<img src={img} 
  className="absolute w-full h-full inset-0 object-cover"
/>

<div className="absolute inset-0 bg-dark-light bg-opacity-75"></div>
<article className="flex-1 basis-[10rem] bg-[#fff] p-4 relative">
<h1 className="text-xl font-semibold text-center">
          Search property smarter, quicker & anywhere
        </h1>
        <div className="icon-box opacity-100 mx-auto mt-4 bg-primary text-[#fff] relative before:absolute before:w-full before:h-full before:rounded-full before:top-0 before:bottom-0 before:bg-primary before:animate-ping">
          <FaPlay />
        </div>
        <h1 className="mt-3 text-center uppercase text-primary">watch video</h1>
</article>
<article className="flex-1 basis-[10rem] relative">
<h1 className="font-mono text-3xl font-thin text-[#f1f5f9]">
          we've been enhancing homes and commercial places.
        </h1>
</article>
</section>
    )
}

export default Search