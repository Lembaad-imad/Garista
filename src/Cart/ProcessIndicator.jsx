import React from "react";

const ProcessIndicator = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between border-2 h-20 z-50 fixed top-20 left-0 right-0 bg-white shadow-md mx-auto p-4 w-11/12 max-w-screen-lg">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✔</span>
          </div>
          <p className="ml-2 text-red-600 font-bold">Order</p>
        </div>

        <div className="flex-1 h-0.5 bg-red-600 mx-2"></div>

        <div className="flex items-center">
          <div className="w-6 h-6 border-2 border-red-600 rounded-full"></div>
          <p className="ml-2 text-gray-600">Preparing</p>
        </div>

        <div className="flex-1 h-0.5 bg-gray-400 mx-2"></div>

        <div className="flex items-center">
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
          <p className="ml-2 text-gray-400">Complete</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessIndicator;
