import { Link } from "react-router-dom";

const SinglePortfolioCard = ({ id, name, number, image, flex }) => {
  return (
    <div key={id} className="relative flex-1 w-full group basis-[20rem]">
      <div className="relative overflow-hidden">
        <Link className="!opacity-100">
          <img
            src={image}
            alt={name}
            className={`w-full ${
              !flex && "h-[220px] md:h-[250px]"
            } object-cover group-hover:scale-125 transition-a`}
          />
        </Link>
        <div className="absolute bottom-0 left-0  px-2 py-2 transition-transform bg-[#fff] backdrop-blur-sm text-secondary rounded-lg">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p>{number} Property</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolioCard;