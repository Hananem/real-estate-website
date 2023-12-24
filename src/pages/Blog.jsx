
import FeedData from "../data/FeedData"
import BlogPostList from "../components/BlogPostList"
import Pagination  from "../components/Pagination"
const Blog = () => {
    return (
      <div className="w-[90%] mx-auto pt-20 mb-[7rem]">
        <BlogPostList />
        <Pagination itemsPerPage={6} pageData={FeedData} />
      </div>
    );
  };
  
  export default Blog;