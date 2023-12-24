import projects from "../data/ProjectsData"
import ProjectCard from "./ProjectCard"
const Projects = () => {
    return(
<section className=" w-[90%] mx-auto   ">
<div className="heading">
    <span className="subtitle">OUR PROJECTS</span>
    <h2 className="title">Excellent Projects Both Small And Complex</h2>
</div>

<article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
{
    projects.map((project) => (
        <ProjectCard key={project.id} {...project}  />
    ))
}


</article>
</section>
    )
}

export default Projects