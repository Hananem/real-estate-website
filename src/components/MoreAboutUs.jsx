import { BiPlay } from "react-icons/bi";
import  Img from "../images/property22.png"

const MoreAboutUs = () => {
  return (
    <section className="w-[90%] mx-auto my-[6rem]">
      <div className="flex flex-wrap gap-4">


        <article className="flex-1 basis-[480px]">
          <h1 className="title">what we do</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            earum, laboriosam soluta, sit natus corporis ab ullam vel voluptates
            inventore ipsa repudiandae minus? Non, deleniti! Quos reiciendis
            saepe voluptatem accusantium nemo praesentium reprehenderit nostrum
            veritatis.
          </p>
          <button className="mt-4 btn btn-primary">read more</button>
        </article>


        <article className="flex-1 basis-[480px]">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-0 left-0 flex-col w-full h-full bg-black/50 flex items-center justify-center">
              <div className="icon-box !text-secondary !bg-transparent border !border-secondary relative before:absolute before:w-full before:h-full before:rounded-full before:animate-ping before:bg-secondary/60">
                <BiPlay className="text-2xl" />
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-secondary capitalize">
                watch More
              </h1>
            </div>
          </div>
        </article>


      </div>
    </section>
  );
};

export default MoreAboutUs;