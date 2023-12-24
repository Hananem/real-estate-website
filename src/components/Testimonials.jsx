import Person16  from "../images/person16.png"
import Person14  from "../images/person10.png"
import Person13 from "../images/person11.png"

import TestimonialCard from "./TestimonialCard"
const Testimonials =() =>  {
    return(
<section className="w-[90%] mx-auto mt-16">
<div>

</div>
<article className="flex flex-wrap items-center justify-between">
    <TestimonialCard name={"Donovan Danis"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} job={"Designer"} src={Person16} />
    <TestimonialCard name={"Abby Lizly"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} job={"Designer"} src={Person13} />
    <TestimonialCard name={"Jack Rogan"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique."} job={"Designer"} src={Person14} />
</article>
</section>
    )
}
export default Testimonials
