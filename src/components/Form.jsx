const Form = () => {
    return (
      <div className="my-[6rem]">
        <div className="flex-col gap-4 flex  items-center sm:flex-row">
          <div className="flex-1 w-full">
            <p className="text-secondary text-base mb-2">First Name</p>
            <input
              type="text"
              className="w-full rounded-lg p-4 outline-none  bg-[#f1f5f9] dark:bg-dark-light"
              placeholder="First Name.."
            />
          </div>
          <div className="flex-1 w-full">
            <p className="text-secondary text-base mb-2">Last Name</p>
            <input
              type="text"
              className="w-full rounded-lg p-4 outline-none  bg-[#f1f5f9] dark:bg-dark-light"
              placeholder="Last Name.."
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-secondary text-base mb-2">Email Address</p>
          <input
            type="text"
            className="w-full  rounded-lg p-4 outline-none  bg-[#f1f5f9] dark:bg-dark-light"
            placeholder="Email Address.."
          />
        </div>
        <div className="mt-4">
          <p className="text-secondary text-base mb-2">Message</p>
          <textarea
            rows={4}
            className="w-full  rounded-lg p-4 outline-none  bg-[#f1f5f9] dark:bg-dark-light"
            placeholder="Message.."
          ></textarea>
        </div>
        <div className="mt-4 flex-center-center">
          <button className="btn btn-primary">submit</button>
        </div>
      </div>
    );
  };
  
  export default Form;