

const ServiceCard = ( { icon, title, text} ) => {
    return(
<div className="flex flex-col p-4  hover:shadow-lg text-center hover:border-t-4 hover:border-t-primary">
<span className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-[#fff]"> {icon}  </span>
<h3 className="mt-2 heading !text-xl text-[#C29470]">

{title}

</h3>
<p className="mt-2">
{text}

</p>
</div>
    )
}

export default ServiceCard