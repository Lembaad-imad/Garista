import React from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const goToLoading = () => {
    navigate('/loadingpage');
  };
  const logo = "/images/f5029f5f92770185812403cfe913b0cb.png"; 

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div>
          <img src={logo} alt="Logo" className="mx-auto mb-4" onClick={goToLoading} />
        </div>
        <div>
          <p className="text-5xl font-bold">Welcome to</p>
          <p className="text-5xl font-bold mt-2">Corado</p>
        </div>
        <div className="absolute bottom-11 right-20 w-full flex flex-col ">
          <p className="text-xl font-sans h-6  text-gray-500 mr-10">Created by</p>
          <p className="text-4xl font-bold  ml-40 font-nexa">gar<span className="text-blue-700">i</span>sta</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
