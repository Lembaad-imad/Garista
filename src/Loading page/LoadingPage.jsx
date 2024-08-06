import React from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const logo = "/images/f5029f5f92770185812403cfe913b0cb.png";
  const navigate = useNavigate();
  const goToChoseLanguage = () => {
    navigate('/choselanguage');
  };

  return (
    <div className="h-screen flex flex-col justify-evenly items-center  ">
      <div className="flex flex-col mb-20">
        <img src={logo} alt="Logo" className="mx-auto" onClick={goToChoseLanguage} />
        <div className="text-center">
          <p className="text-2xl font-extrabold">Welcome to</p>
          <p className="text-2xl font-extrabold mt-1">Corado</p>
        </div>
      </div>
      <div className="mb-72">
        <Spinner />
      </div>
      <div className="absolute bottom-11 right-20 w-full flex flex-col text-center ">
        <p className="text-xl font-sans h-6  text-gray-500 mr-10">Created by</p>
        <p className="text-4xl font-bold  ml-40 font-nexa">
          gar<span className="text-blue-700">i</span>sta
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
