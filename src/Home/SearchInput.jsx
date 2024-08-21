import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const SearchInput = () => {
  const searchLogo = '/images/Search icon.svg';
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(['Burger', 'Kebab', 'Cheese Burger', 'Salad', 'Chicken Burger']);
  const navigate = useNavigate();
  const location = useLocation();
  const handleInputChange = (e) => {

    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchTerm);
      navigate(-1)
    }
  };
  const isHomePage = location.pathname === '/hompage';
  return (
    <div className={` text-center flex  gap-3 items-center  justify-center ${isHomePage && 'w-11/12'}` } >   
      {!isHomePage &&
         <div className='w-10 h-10 border rounded-md flex justify-center items-center border-black'
         onClick={() => navigate(-1)}
     >
         <MdOutlineKeyboardArrowLeft className='text-3xl' />
         </div> 
      }
     
      <div className="relative  w-full flex   bg-gray-100 rounded-xl px-4 py-2 shadow-sm">
        <img src={searchLogo} alt="Search" className="w-5 h-5 mr-3" />
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent w-full font-roboto text-gray-700 focus:outline-none"
        />
      </div>

      {showSuggestions && (
        <div className={`absolute w-screen self-start  mt-2  bg-white shadow-lg  ${isHomePage ? 'top-28 z-10':'top-14 z-10'}`} >
          <div className='w-full h-2 bg-white '></div>
          <ul>
            {suggestions
              .filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 flex justify-between mt-2 mb-1 border-b-2 text-left ml-1 hover:bg-gray-100"
                  onClick={() => {
                    setSearchTerm(item);
                    setShowSuggestions(false);
                  }}
                >
                 <p> {item}</p> 
                 <div><MdOutlineKeyboardArrowRight className='text-2xl' /></div>
                </li>
              ))}
          </ul>
          <div  className='w-full h-2 bg-white'></div>
        </div>
      )}



   
    </div>
  );
};

export default SearchInput;
