
import property from "../data/PropertyData"
import PropertyCard from "./PropertyCard"
const Featured =() => {
    return(
<section className=" w-[90%] mx-auto  ">
<div className="heading">
    <span className="subtitle">FEATURED</span>
    <h2 className="title">Explore Featured Latest Properties</h2>
</div>

<article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
{
    property.slice(0,3).map((featured) => (
        <PropertyCard key={featured.id}  {...featured}  />
    ))
}
</article>
</section>
    )
}

export default Featured