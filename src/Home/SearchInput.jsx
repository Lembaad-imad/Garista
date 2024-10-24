import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ProductsList from "../Home/Products/ProductsList.json";
import useStore from "../Zustand/Store";
import Filter from "./Filter";

const SearchInput = () => {
  const searchLogo = "/images/Search icon.svg";
  const [searchTerm, setSearchTerm] = useState("");
  const [chose, setChosen] = useState(false);
  const { filterClicked } = useStore();
  const { products,records,setRecords } = useStore();
  const setFilterClickedstore = useStore((state) => state.setFilterClicked);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions] = useState([
    "Burger",
    "Kebab",
    "Cheese Burger",
    "Salad",
    "Chicken Burger",
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
   
    setShowSuggestions(value.length > 0);
    if (value === "") {
      setChosen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChosen(true); 
      setRecords([...records, searchTerm]);
      console.log("Searching for:", searchTerm);
    }
  };
  const handleClickProduct = (item) => {
    setRecords( [...records, item.name]);
    navigate("/info ", { state: { product: item } });
  };
  const filteredProducts = ProductsList.filter((item) =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isHomePage = location.pathname === "/hompage";
  const isSearchPage = location.pathname === "/search";
  return (
    <>
      <div
        className={`text-center flex gap-3 items-center justify-center ${
          isHomePage && "w-11/12"
        }`}
      >
{(!isHomePage || searchTerm || isSearchPage) && (
  <div
    className="w-12 h-12 border  rounded-xl flex justify-center items-center border-black"
    style={{ minWidth: '3rem', minHeight: '3rem' }} 
    onClick={() => navigate(-1)}
  >
    <MdOutlineKeyboardArrowLeft className="text-3xl" />
  </div>
)}


        <div className={`relative  flex items-center bg-gray-100 rounded-xl px-4 py-2 shadow-sm ${isHomePage ? 'w-full':'w-10/12'}`}>
          <img src={searchLogo} alt="Search" className="w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Search for food..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-transparent h-8 font-roboto text-gray-700 focus:outline-none"
          />
        </div>

        {showSuggestions && searchTerm && !chose && (
          <div
            className={`absolute w-screen self-start mt-4 bg-white shadow-lg ${
              isHomePage ? "top-28 z-10" : "top-14 z-10"
            }`}
          >
            <div className="w-full h-2 bg-white"></div>
            <ul>
              {filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 flex justify-between mt-2 mb-1 border-b-2 text-left ml-1 hover:bg-gray-100"
                  onClick={() => {
                    setSearchTerm(item.name);
                    setShowSuggestions(false);
                    setChosen(true);
                  }}
                >
                  <p>{item.name} </p>
                  <div>
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full h-2 bg-white"></div>
          </div>
        )}
        {chose && searchTerm && (
          <div
            className={`absolute w-screen h-screen self-start mt-4 bg-white shadow-lg ${
              isHomePage ? "top-28 z-10" : "top-14 z-10"
            }`}
          >
            <div className="w-full h-2 bg-white "></div>
            <ul>
              {ProductsList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 flex justify-between mt-2 mb-1 border-b-2 ml-1 hover:bg-gray-100"
                  onClick={() => {
                    handleClickProduct(item);
                  }}
                >
                  <div className=" rounded-full">
                    <img
                      src="images/productimage.svg"
                      className="rounded-3xl"
                    />
                  </div>
                  <section className="flex flex-col mt-1 text-right w-11/12">
                    <div className="flex text-right justify-between w-11/12 ml-4">
                      <div className="p-1">
                        <p className="font-bold sm:text-base text font-roboto text-base">
                          {item.name}
                        </p>
                      </div>
                      <div
                        className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <img src="/images/plus.svg" alt="plus" />
                      </div>
                    </div>
                    <div className="flex gap-1 ml-5">
                      <img
                        src="/images/Clock.svg"
                        alt="clock"
                        className="w-3 h-3 self-center"
                      />
                      <span className="text-gray-500 text-sm">{item.time}</span>
                    </div>
                    <div className="flex text-right justify-between w-11/12 ml-5">
                      <div className="hidden hxl:flex gap-2">
                        <img src="/images/etoils.svg" alt="stars" />
                        <p className="text-xs text-gray-400 self-center">
                          ({item.rating})
                        </p>
                      </div>
                      <div>
                        <p className="text-red-600 font-sans font-medium">
                          {item.price.toFixed(2)} MAD
                        </p>
                      </div>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
            <div className="w-full h-2 bg-white"></div>
          </div>
        )}

        {chose && (
          <div onClick={() => setFilterClickedstore(true)}>
            <img src="/images/Filter.svg " className="w-14" />
          </div>
        )}
      </div>
      {filterClicked && <Filter />}
    </>
  );
};

export default SearchInput;
