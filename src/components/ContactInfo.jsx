import { BiMap } from "react-icons/bi";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 md:grid-cols-3">
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-[#fff] mx-auto text-2xl">
          <FiPhone />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Phone Number</h1>
        <p>+213 678 74522</p>
        <p>+213 775 74128</p>
      </div>
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-[#fff] mx-auto text-2xl">
          <FiMail />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Email Address</h1>
        <p>martvilla@gmail.com</p>
        <p>martvilla2@gmail.com</p>

      </div>
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-[#fff] mx-auto text-2xl">
          <BiMap />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Office Address</h1>
        <p>Lumumu Street Plot 3943, Chicago, USA</p>
        <p>Horizon Street, London,UK</p>
      </div>
    </div>
  );
};

export default ContactInfo;