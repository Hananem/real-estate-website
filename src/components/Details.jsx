import { FiCheck } from "react-icons/fi";
import  Img from "../images/hero2.png"
import  Img2 from "../images/property15.png"
import  Img3 from "../images/property3.png"

const Details = () => {
  return (
    <div >
      <img
      src={Img}

        alt=""
        className="w-full h-[300px] object-cover"
      />
      <p className="mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
        tempora quos cumque accusantium corporis consequuntur soluta facere eius
        facilis voluptate? Vel natus quod provident culpa dolores quasi modi
        quidem, quia possimus in accusamus iusto atque esse itaque neque unde
        aut, assumenda, magnam quas earum fuga. Quibusdam corporis et ullam
        corrupti?
      </p>
      <h1 className="mt-4 text-2xl font-semibold">
        Making your ideas come to reality with a good home
      </h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut
        quasi, sit delectus labore, sed repellendus magni rerum beatae deserunt
        libero. Iusto magnam numquam blanditiis similique assumenda consectetur
        ducimus voluptates?
      </p>
      <div className="flex-col gap-3 mt-3 flex items-center sm:flex-row">
        <img
                      src={Img2}

          alt=""
          className="w-full h-[250px] object-cover"
        />
        <img
          src={Img3}

          alt=""
          className="w-full h-[250px] object-cover"
        />
      </div>
      <p className="mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nam, quo
        cumque tempora, vitae aut consequatur ipsam, alias libero quaerat unde
        tempore sit officiis. Nemo debitis neque alias, harum possimus impedit
        non itaque culpa recusandae odit cupiditate illo dolores numquam.
      </p>
      <div className="mt-3">
        <div className="flex items-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Outstanding Property</p>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Professional and experienced human resource</p>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Provide the best services for users</p>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Modern city locations and exceptional lifestyle</p>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut
          quasi, sit delectus labore, sed repellendus magni rerum beatae
          deserunt libero. Iusto magnam numquam blanditiis similique assumenda
          consectetur ducimus voluptates?
        </p>
      </div>
    </div>
  );
};

export default Details;