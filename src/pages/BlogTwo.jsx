import BlogPostList from "../components/BlogPostList";
import  CTA from "../components/CTA";
import Pagination from "../components/Pagination";
import SocialIcons from "../components/SocialIcons"
import TopRated from "../components/TopRated";
import Type from "../components/Type";
import PopularTags from "../components/PopularTags";
import  FeedData  from "../data/FeedData";

const BlogTwo = () => {
  return (
    <div className="w-[90%] mx-auto pt-20 mb-[8rem]">
      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-x-14">
        <div className="top-0 mt-5 md:col-span-2 md:mt-0 h-fit md:sticky">
          <BlogPostList />
          <Pagination itemsPerPage={6} pageData={FeedData} />
        </div>
        <div className="top-0 row-start-3 md:col-span-1 md:row-start-auto h-fit md:sticky">
          <input
            type="text"
            className="border outline-none  dark:border-dark px-3 py-[0.35rem] w-full"
            placeholder="Enter Keywords.."
          />
          <Type />
          <TopRated />
          <PopularTags />
          <SocialIcons />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;