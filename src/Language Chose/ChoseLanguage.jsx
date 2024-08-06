import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const ChoseLanguage = () => {
    const navigate = useNavigate();
  const logo = "/images/Garista icon (5) 1.svg";
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleContinue = () => {
    navigate('/hompage', { state: { language: selectedLanguage } });
  };
  return (
    <div className="flex flex-col justify-around h-screen items-center  bg-bgcolor">
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="logo" className="w-28" />
        <p className="font-roboto text-3xl font-bold">Welcome to garista </p>
        <p className="font-roboto text-2xl text-gray-500 font-bold">
          Choose your Language
        </p>
      </div>
      <div>
      <div className="flex flex-col gap-4 justify-between w-screen items-center">
  <div
    className={`flex justify-between border-2  border-gray-400 p-3 w-2/3 rounded-full ${
      selectedLanguage === "english" && "bg-btncollor text-white"
    }`}
    onClick={() => handleLanguageChange("english")}
  >
    <p className="font-bold font-roboto ml-5 text-xl">English</p>
    <div
      className={`border-2 border-gray-400 w-8 h-8 rounded-full mr-2 flex justify-center ${
        selectedLanguage === "english" && "bg-white text-btncollor"
      }`}
    >
      {selectedLanguage === "english" && (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-red-700 font-bold text-xl self-center"
        />
      )}
    </div>
  </div>

  <div
    className={`flex justify-between border-2 border-gray-400 p-3 w-2/3 rounded-full ${
      selectedLanguage === "french" && "bg-btncollor text-white"
    }`}
    onClick={() => handleLanguageChange("french")}
  >
    <p className="font-bold font-roboto ml-5 text-xl">French</p>
    <div
      className={`border-2 border-gray-400 w-8 h-8 rounded-full mr-2 flex justify-center ${
        selectedLanguage === "french" && "bg-white text-btncollor"
      }`}
    >
      {selectedLanguage === "french" && (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-red-700 font-bold text-xl self-center"
        />
      )}
    </div>
  </div>

  <div
    className={`flex justify-between border-2 border-gray-400 p-3 w-2/3 rounded-full ${
      selectedLanguage === "arabic" && "bg-btncollor text-white"
    }`}
    onClick={() => handleLanguageChange("arabic")}
  >
    <p className="font-bold font-roboto ml-5 text-xl">العربية</p>
    <div
      className={`border-2 border-gray-400 w-8 h-8 rounded-full mr-2 flex justify-center ${
        selectedLanguage === "arabic" && "bg-white text-btncollor"
      }`}
    >
      {selectedLanguage === "arabic" && (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-red-700 font-bold text-xl self-center"
        />
      )}
    </div>
  </div>
</div>


      </div>
      <div className="flex flex-col items-center w-3/4 gap-5">
        <p className="text-wrap font-sans text-gray-500 font-bold text-base w-5/6">
          Your language preference can be changed at any time in Settings.
        </p>
        <button
          className={`bg-btncollor p-3 w-36 text-white rounded-xl font-bold text-lg ${
            !selectedLanguage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!selectedLanguage}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChoseLanguage;
