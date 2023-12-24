
import SingleFeedCardGrid from "./SingleFeedCardGrid"
import FeedData from "../data/FeedData"
const Feed =() => {
    return(
<section className=" w-[90%] mx-auto my-[6rem]">
<div className="heading" >
<span className="subtitle">FEED</span>
<h2 className="title">Latest News Feed</h2>
</div>
<article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
{
FeedData.slice(0,4).map((feed) => (
<SingleFeedCardGrid key={feed.id}  {...feed} />
))
}
</article>
</section>
    )
}

export default Feed