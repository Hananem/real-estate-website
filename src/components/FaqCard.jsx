import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";


const FaqCard =({ question, response }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    const handleShow = () => {
      setIsOpen(!isOpen);
      setIsActive(!isActive);
    };
    return(
        <div className="w-[70%] bg-[#fff] shadow-lg px-8 py-4 rounded-lg dark:bg-dark-light mt-4 mx-auto" >
        <div
          className={`accordion  flex items-center justify-between  cursor-pointer   hover:text-primary  ${
            isActive && "active"
          }`}
          onClick={handleShow}
        >
          <h1 className="text-xl font-bold">{question}</h1>
          {isOpen ? <BiMinus /> : <BiPlus />}
        </div>
        <p
          className={`p-0 max-h-0 overflow-hidden transition-all ${
            isOpen && "isOpen"
          }`}
        >
          {response}
        </p>
      </div>
    )
}

export default FaqCard