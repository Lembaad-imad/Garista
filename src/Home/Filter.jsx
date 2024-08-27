import React, { useState } from 'react'
import useStore from "../Zustand/Store";
import PriceSlider from './PriceSlider';

const Filter = () => {
    const setFilterClickedstore = useStore((state) => state.setFilterClicked);
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-100 overflow-y-auto">
            <div className="flex mt-5 w-11/12 ml-5 p-1">
                <div className="self-center" onClick={() => setFilterClickedstore(false)}>
                    <img src='images/cross.svg' className="text-left font-bold text-2xl" />
                </div>
                <p className="flex-1 text-center font-sans text-2xl font-bold">Filters</p>
            </div>
            <div className="h-[1px] mt-3 bg-gray-300"></div>
            <div className='mt-8 w-11/12 ml-5 p-1'>
                <p className='text-xl font-bold font-roboto text-gray-700'>Sort by</p>
                <div className="flex flex-col space-y-2 mt-5">
                    {["Price: Low to High", "Price: High to Low", "Reviews", "Newest", "Just for you"].map(
                        (option, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="sort"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                    className="form-radio text-black h-6 w-6"
                                />
                                <span className="text-gray-800 font-roboto text-lg">{option}</span>
                            </label>
                        )
                    )}
                </div>
            </div>
            <div className="border-b-[1px] border-gray-400 w-10/12 mx-auto mt-4"></div>
            <div className='mt-10 w-11/12 ml-5 p-1'>
                <p className='text-xl font-bold font-roboto text-gray-700'>Price</p>
                <PriceSlider />
            </div>
            <div className="border-b-[1px] border-gray-400 w-10/12 mx-auto mt-4"></div>
            <div className='mt-8 w-11/12 ml-5 p-1'>
                <p className='text-xl font-bold font-roboto text-gray-700'>Sort by</p>
                <div className="flex flex-col space-y-2 mt-5">
                    {[, "★★★★+", "★★★+", "★★+", "★+"].map((option, index) => (
                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sort"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                                className="form-radio text-black h-6 w-6"
                            />
                            <span className="text-gray-800 font-roboto text-lg">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='mt-12 w-11/12 ml-5 p-1'>
                <div className="flex gap-2 justify-between">
                    <button
                        className="bg-transparent border-2 h-16 border-red-500 w-6/12 text-red-500 text-lg font-semibold py-2 px-6 rounded-lg"
                        onClick={() => setFilterClickedstore(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 text-white text-lg w-6/12 font-semibold py-2 px-6 rounded-lg"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
