

const WhatWeDoCard = ( {name, icon, text}) => {
    return(
        <div
        className="p-3 text-center rounded-lg group hover:shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
       
      >
        <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-[#fff]">
          <div className="text-2xl"> {icon}</div>
        </div>
        <h1 className="mt-2 heading !text-xl">{name}</h1>
        <p className="mt-2">{text}</p>
        <div className="hidden mt-4 group-hover:flex-center-center ">
          <button className="btn btn-primary">view more details</button>
        </div>
      </div>
    )
}

export default WhatWeDoCard