import React from "react";

const ProcessIndicator = () => {
  return (
    <>
   
    <div className="relative w-full flex justify-center ">
      <div className="flex items-center justify-between h-20 bg-white  mx-auto p-4 w-11/12 max-w-screen-lg">
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-gray-400 text-gray-400  font-bold rounded-full flex items-center justify-center">
            01
          </div>
          <div className="ml-2 text-center">
            <p className="text-gray-400 mr-2 font-bold">New</p>
          </div>
        </div>

        <div className="w-60 h-0.5 bg-green-300 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-gray-400 text-gray-400  font-bold rounded-full flex items-center justify-center">
            02
          </div>
          <div className="ml-2 text-center">
            <p className="text-gray-400 font-bold">Preparing</p>
          </div>
        </div>

        <div className="w-60 h-0.5 bg-gray-300 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 font-bold rounded-full flex items-center justify-center">
            03
          </div>
          <div className="ml-2 text-center">
            <p className="text-gray-400">Ready</p>
          </div>
        </div>

        <div className="w-60 h-0.5 bg-gray-300"></div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 font-bold rounded-full flex items-center justify-center">
            04
          </div>
          <div className="ml-2 text-center">
            <p className="text-gray-400">Completed</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-b-[1px] border-gray-400 w-full  "></div>
    </>
  );
};

export default ProcessIndicator;
