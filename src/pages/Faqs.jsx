import FaqsData from "../data/FaqsData"
import FaqCard from "../components/FaqCard"

const Faqs = () => {
    return(
<section className="flex items-center justify-center min-h-[150hv] pt-12 pb-16" >
<article  className="">
    {
        FaqsData.map((faq) => (
            <FaqCard key={faq.id} {...faq} />
        ))
    }
</article>
</section>
    )
}

export default Faqs