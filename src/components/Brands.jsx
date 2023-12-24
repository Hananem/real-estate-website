import Brand1 from "../images/brand1.png"
import Brand2 from "../images/brand2.png"
import Brand3 from "../images/brand3.png"
import Brand4 from "../images/brand4.png"
import Brand5 from "../images/brand5.png"

const Brands = () => {
    return(
        <section  className=" text-center max-w-[600px] mx-auto ">
            <div className="heading">
            <span className="subtitle">BRANDS</span>
        <h2 className="title">our brands</h2>
        <p >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quia eius quaerat, quas deleniti sed. Sapiente illo architecto!
        </p>
            </div>

            <article className=" mt-[2rem] flex flex-wrap items-center  justify-center gap-x-4">
            <div className="group" >
            <img
             src={Brand1}
              alt=""
              className="w-20 h-10 object-cover group-hover:scale-125 transition-a"
            />
          </div>
          
            <div className="group" >
            <img
             src={Brand2}
              alt=""
              className="w-20 h-10 object-cover group-hover:scale-125 transition-a"
            />
          </div>

          <div className="group" >
            <imgdata
             src={Brand3}
              alt=""
              className="w-20 h-10 object-cover group-hover:scale-125 transition-a"
            />
          </div>

          <div className="group" >
            <img
             src={Brand4}
              alt=""
              className="w-20 h-10 object-cover group-hover:scale-125 transition-a"
            />
          </div>

          <div className="group" >
            <img
             src={Brand5}
              alt=""
              className="w-20 h-10 object-cover group-hover:scale-125 transition-a"
            />
          </div>

       
            </article>
        </section>
    )
}

export default Brands