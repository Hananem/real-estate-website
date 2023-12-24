
import Img from "../images/property9.png"

const ForMoreInfo = () => {
    return (
      <section className="w-[90%] mx-auto my-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full w-full flex-1 basis-[18rem]">
            <img
              src={Img}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 basis-[18rem] bg-[#172621] py-6 !text-[#e2e8f0] ">
            <div className="max-w-[350px] w-full mx-auto bg-card-dark p-3 rounded-lg">
              <h1 className="text-lg font-semibold">For more information</h1>
              <p>
                For more inquiries or deals, just conatct us using the form below,
                we will contact you back!
              </p>
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full px-2 py-1 border-none rounded-md outline-none bg-[#172621]"
                  placeholder="Your name.."
                />
                <input
                  type="text"
                  className="w-full px-2 py-1 mt-3 border-none rounded-md outline-none bg-[#172621]"
                  placeholder="Your email.."
                />
                <textarea
                  type="text"
                  className="w-full p-2 mt-3 border-none rounded-md outline-none bg-[#172621]"
                  rows={3}
                  placeholder="Your message.."
                ></textarea>
                <button className="w-full mt-4 btn btn-primary">submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ForMoreInfo;
  