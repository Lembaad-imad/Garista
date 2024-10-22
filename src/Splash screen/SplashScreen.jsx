import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { motion } from "framer-motion";
import { Avatar,  AvatarImage, AvatarFallback} from "./avatar"

const SplashScreen = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowContent(true);

      
      const redirectTimer = setTimeout(() => {
        goToLoading();
      }, 3000); 

      return () => clearTimeout(redirectTimer); 
    }, 1200); 

    return () => clearTimeout(timer); 
  }, []);

  const goToLoading = () => {
    navigate('/hompage');
  };

  const logo = "/images/f5029f5f92770185812403cfe913b0cb.png";

  return (
    <div className="h-screen flex items-center justify-center bg-[#f8f9fa]">
      {!showContent ? (
        <div>
          <img
            src="/images/Garista icon (5) 1.svg"
            alt="logo"
            className="w-28 animate-grow-shrink-spin-opacity"
          />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className="flex flex-col items-center justify-center overflow-hidden h-dvh bg-[#f8f9fa]">
        <div className="flex flex-col items-center justify-center space-y-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* <img
                    // src={`${APIURL}/storage/${restaurantLogo}`}
                    src={`${APIURLS3}/${restaurantLogo}`}
                    loading='lazy'
                    className="w-48 object-cover rounded-full bg-[#999] h-48"
                    alt={"Restaurant Logo"}
                /> */}
                <div className="h-48 w-48 rounded-full">
                    <img
                    // src={`${APIURL}/storage/${ImageItem}`}
                    src="/images/infoimage.svg"
                    className="bg-white h-48 max-w-48 rounded-full  object-cover"
                    />
                    {/* <AvatarFallback className="bg-slate-500 h-48 w-48 rounded-full"></AvatarFallback> */}
                </div>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-3xl font-bold text-[#2c3e50] text-center"
            >
                Garista Restaurant
            </motion.h1>
        </div>
        <div className="absolute bottom-6 flex items-center space-x-2 text-[#7f8c8d]">
            <span>Powered by <span className="font-bold text-xl">Garista.com</span></span>
        </div>
    </motion.div>
      )}

      {/* <div className="text-center">
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
      </div> */}
    </div>
  );
};

export default SplashScreen;
