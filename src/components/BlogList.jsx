import React from "react";
import { useSelector } from "react-redux";
import { dataStore } from "../slice/dataSlice";
import SingleFeedCard from "./SingleFeedCard";

const BlogList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {currentDataItems.map((feed) => (
        <SingleFeedCard key={feed.id} {...feed} />
      ))}
    </div>
  );
};

export default BlogList;
