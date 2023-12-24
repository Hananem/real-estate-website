import  projects  from "../data/ProjectsData";
import SinglePortfolioCard from "./SinglePortfolioCard";

const PortfolioList = ({ flex }) => {
  return (
    <div
      className={`${
        flex
          ? "flex-wrap gap-2 flex  items-center justify-center "
          : "grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {projects.map((project) => (
        <SinglePortfolioCard {...project} key={project.id} flex={flex} />
      ))}
    </div>
  );
};

export default PortfolioList;