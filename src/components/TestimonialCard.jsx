import { FaQuoteRight } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const TestimonialCard = ({name, job, text,src})=> {
    return(
<div className=" relative flex-1 basis-[16rem]  shadow rounded-md p-8">
<div className="absolute opacity-10 text-4xl bottom-1 right-1">
        <FaQuoteRight />
      </div>
<p>{text}</p>
    <ReactStars
              size={18}
              isHalf={true}
              activeColor="#ffd700"
              value={4.5}
              edit={false}
            />
<div className="flex items-center gap-2">
<div >
<span className="font-semibold capitalize">
{name}
</span>
<p className="text-sm capitalize"> {job}  </p>
</div>

<img src={src} className="w-8 h-8 rounded-full object-cover" />
</div>

</div>
    )
}

export default TestimonialCard