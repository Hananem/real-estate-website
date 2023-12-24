import React from "react";
import { BiArrowBack } from "react-icons/bi";
import NotFoundImg from "../images/pagenotfound.png";

const handleGoBack = () => {
  window.history.back();
};

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex-col  text-center flex items-center justify-center mb-[6rem]">
      <img src={NotFoundImg} alt="" className="w-[400px]" />
      <h1 className="text-6xl font-bold opacity-50 text-primary">Page Not Found!!</h1>
      <button
        className="gap-2 mt-4 btn btn-primary flex items-center justify-center"
        onClick={handleGoBack}
      >
        <BiArrowBack />
        <span>go back</span>
      </button>
    </section>
  );
};

export default PageNotFound;