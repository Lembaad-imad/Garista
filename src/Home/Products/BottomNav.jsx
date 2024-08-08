import React from 'react';


const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-footer p-4 -3xl shadow-md flex justify-around items-center">
    <div className="flex flex-col items-center">
      <img src='/images/home.svg'/>
      <span className="text-red-500 text-sm">Home</span>
    </div>
    <div className="flex flex-col items-center">
    <img src='/images/search.svg'/>

      <span className="text-gray-500 text-sm">Search</span>
    </div>
    <div className="flex flex-col items-center relative">
      <div className="bg-red-500 w-12 h-12 rounded-full bottom-16 relative flex items-center justify-center absolute -top-8 shadow-lg"
         
      >
              <img src='/images/bill.svg' />

      </div>
    </div>
    <div className="flex flex-col items-center">
    <img src='/images/shop.svg'/>

      <span className="text-gray-500 text-sm">Cart</span>
    </div>
    <div className="flex flex-col items-center">
    <img src='/images/info-circle.svg'/>

      <span className="text-gray-500 text-sm">Info</span>
    </div>
  </div>
);

export default BottomNav;
