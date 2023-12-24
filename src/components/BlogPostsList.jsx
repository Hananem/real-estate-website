import { useSelector } from "react-redux";
import { dataStore } from "../slice/dataSlice";

import SingleFeedCard from "./SingleFeedCard";

const BlogPostsList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div>
      <div className="mt-2 flex flex-wrap gap-4">
        {currentDataItems.slice(0,6).map((feed) => (
          <SingleFeedCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsList;