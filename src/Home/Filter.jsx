import React, { useState } from "react";
import useStore from "../Zustand/Store";
import PriceSlider from "./PriceSlider";

const Filter = () => {
  const setFilterClickedstore = useStore((state) => state.setFilterClicked);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-100 overflow-y-auto sm:w-full sm:h-full sm:px-4 sm:py-4">
      <div className="flex mt-5 w-11/12 ml-5 p-1 sm:mt-3 sm:w-full sm:ml-0 sm:p-0">
        <div
          className="self-center"
          onClick={() => setFilterClickedstore(false)}
        >
          <img
            src="images/cross.svg"
            className="text-left font-bold text-2xl sm:text-xl"
          />
        </div>
        <p className="flex-1 text-center font-sans text-2xl font-bold sm:text-lg">
          Filters
        </p>
      </div>
      <div className="h-[1px] mt-3 bg-gray-300"></div>
      <div className="mt-1 w-11/12 ml-5 p-1 sm:mt-4 sm:w-full sm:ml-0 sm:p-0">
        <p className="text-xl font-bold font-roboto text-gray-700 sm:text-lg">
          Sort by
        </p>
        <div className="flex flex-col  space-y-2 mt-5 sm:mt-3">
          {[
            "Price: Low to High",
            "Price: High to Low",
            "Reviews",
            "Newest",
            "Just for you",
          ].map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="form-radio text-black h-6 w-6 sm:h-5 sm:w-5"
              />
              <span
                className={`font-roboto text-lg ${
                  selectedOption === option ? "text-black" : "text-gray-400"
                } sm:text-base`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-b-[1px] border-gray-400 w-10/12 mx-auto mt-1 sm:w-full sm:mt-2"></div>
      <div className="mt-4 w-11/12 ml-5 p-1 sm:mt-5 sm:w-full sm:ml-0 sm:p-0">
        <p className="text-xl font-bold font-roboto text-gray-700 sm:text-lg">
          Price
        </p>
        <PriceSlider />
      </div>

      <div className="fixed bottom-20 w-11/12 ml-5 p-1 sm:w-full sm:ml-0 sm:bottom-5">
        <div className="flex gap-2 justify-between">
          <button
            className="bg-transparent border-2 h-14 border-red-500 w-6/12 text-red-500 text-lg font-semibold py-2 px-6 rounded-lg sm:text-base sm:h-12 sm:px-4"
            onClick={() => setFilterClickedstore(false)}
          >
            Cancel
          </button>
          <button className="bg-red-500 text-white text-lg w-6/12 font-semibold py-2 px-6 rounded-lg sm:text-base sm:h-12 sm:px-4">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
