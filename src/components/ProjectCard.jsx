import {Link} from "react-router-dom"

const ProjectCard = ( {name, number, image} ) => {
    return(
<div className="relative  ">
<div className="overflow-hidden">
<a className="opacity-100">
<img src={image}
  className="w-full h-[270px] object-cover  group-hover "
  
    />
</a>

</div>
  <div className="absolute bottom-1 right-1  px-[.5rem] py-2  bg-[#fff] backdrop-blur-sm text-secondary rounded-lg">
    <h5 className="text-[19px] font-semibold"> {name} </h5>
    <p> {number} Property </p>
  </div>
</div>
    )
}

export default ProjectCard