import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import categories from "../data/CategoryData"

const Categories = () => {
  const categoryContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoryContainer.current.scrollLeft += 200)
      : (categoryContainer.current.scrollLeft -= 200);
    categoryContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  return (
    <div className=" w-[90%]  mx-auto pt-10 pb-16">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="subtitle">CATEGORIES</span>
          <h1 className="title">
            find your dream house by searching our popular categories
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veniam, odio suscipit minima accusamus ipsum.
          </p>
          <button className="mt-4 btn btn-primary">all categories</button>
        </div>
        <div className="md:col-span-3 ">
          <div className="justify-end flex items-center gap-x-3">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div>

          <div
            className="gap-3 mt-4 overflow-auto flex items-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {categories.map(({ id, name, number, image }) => (
              <div
                key={id}
                className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <a className="!opacity-100">
                    <img
                      src={image}
                      alt={name}
                      className="w-full  h-[300px] object-cover group-hover:scale-125 transition-a"
                    />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 px-2 py-2 transition-transform bg-[#fff] backdrop-blur-sm text-secondary rounded-lg">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{number} buildings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;