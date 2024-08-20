import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBellConcierge, faCircleInfo, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate,useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveIcon = () => {
    if (location.pathname === '/search') return 'search';

    return 'hompage'; 
  };

  const activeIcon = getActiveIcon();

  return (
    <div className="fixed navigation bottom-0 z-100 left-0 right-0 p-4 shadow-md">
      <div className="menu w-full h-24 flex justify-center items-center">
        <div className='bill bg-red-500'>
          <i></i>
          <FontAwesomeIcon icon={faBellConcierge} className="text-2xl text-white" />
        </div>
      </div>

      <div className="fixed bottom-3 z-10 left-0 right-0 flex justify-around items-center">
        <div className="flex flex-col items-center" onClick={() => navigate('/hompage')}>
          <FontAwesomeIcon icon={faHouse} className={`text-2xl  ${activeIcon === 'hompage' ? 'text-red-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeIcon === 'home' ? 'text-red-500' : 'text-gray-400'}`}>Home</span>
        </div>
        <div className="flex flex-col  mr-5 " onClick={() =>  navigate('/search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={`text-2xl search   ${activeIcon === 'search' ? 'text-red-500' : 'text-gray-400'}`} />
          <span className={`text-xs  ${activeIcon === 'search' ? 'text-red-500' : 'text-gray-400'}`}>Search</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => setActiveIcon('cart')}>
          <FontAwesomeIcon icon={faBagShopping} className={`text-2xl ${activeIcon === 'cart' ? 'text-red-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeIcon === 'cart' ? 'text-red-500' : 'text-gray-400'}`}>Cart</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => setActiveIcon('info')}>
          <FontAwesomeIcon icon={faCircleInfo} className={`text-2xl ${activeIcon === 'info' ? 'text-red-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeIcon === 'info' ? 'text-red-500' : 'text-gray-400'}`}>Info</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
