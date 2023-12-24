import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const FeedCard = ({
    id,
    title,
    date_posted,
    image,
    category,
    author,
  }) => {
    return(
<div className=" ">
<div className="group !opacity-100 overflow-hidden">
        <a className="!opacity-100">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
          />
        </a>
      </div>
      <div className="absolute top-2 left-2">
        <span className="px-3 py-1 text-[#fff] capitalize rounded-full bg-secondary">
          {category}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm uppercase opacity-60">
          by {author?.name}: {date_posted}
        </p>
        <a  className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-semibold capitalize">{title}</h1>
        </a>
        <a className="mt-4 flex items-center gap-x-2 hover:underline text-primary">
          <span className="uppercase hover:underline">read more</span>{" "}
          <FiArrowRight />
        </a>
      </div>
</div>
    )
}

export default FeedCard