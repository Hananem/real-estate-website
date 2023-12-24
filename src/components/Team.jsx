
import TeamCard from "./TeamCard"
import TeamData from "../data/TeamData"
const Team =() => {
    return(
<section  className=" mx-auto w-[90%]  mb-[11rem] ">
    <div className="heading">
       <span className="subtitle">OUR TEAM</span>
       <h2 className="title">
          Meet With Our Experienced Team
       </h2>
       <article className="grid grid-cols-1 gap-x-3  gap-y-[3rem]  mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{
   TeamData.slice(2,6).map((team) => (
    <TeamCard key={team.id}  {...team}/>  ))
}
       </article>
    </div>
</section>
    )
}

export default Team