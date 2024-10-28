import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
const HistoryDialog = ({ setOpen, open }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const navigate = useNavigate();

  const images = [
    "images/emoji1.svg",
    "images/emoji2.svg",
    "images/emoji3.svg",
    "images/emoji4.svg",
    "images/emoji5.svg",
  ];

  const handleClickFeedBack = (index) => {
    setSelectedEmoji(index);
  };

  return (
    <>
   
  
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
      />

      <div className="fixed -bottom-52 inset-0 z-100 w-screen flex items-center justify-center overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative bottom-28 w-full max-w-md h-auto transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:my-8"
          >
      
            <div className="bg-white z-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex flex-col">
                <div className="flex justify-between w-full sm:w-11/12 ml-0 sm:ml-5 p-1">
                  <div className="relative flex w-full items-center justify-center">
                    <img src="images/feed.svg" className="ml-5" alt="Feedback" />
                  </div>
                  <div
                    className="self-center cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src="images/exist.svg"
                      className="w-4 h-4 relative bottom-20"
                      alt="Close"
                    />
                  </div>
                </div>

                <div className="w-full mt-8 flex flex-col justify-center items-center gap-3">
                  <p className="font-bold text-xl sm:text-3xl font-sans text-center">
                    Send Feedback
                  </p>
                  <div className="flex w-80 gap-2 justify-evenly">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative p-2 flex z-10 justify-center rounded-lg items-center w-14 h-14 ${
                          selectedEmoji === index
                            ? " ring-2 ring-[#f3ae60]  ring-offset-[1px] bg-orange-100"
                            : "border-gray-300 border-2 bg-[#f2f2f2]"
                        }`}
                        onClick={() => handleClickFeedBack(index)}
                      >
                        <img src={image} alt="" />
                        {selectedEmoji === index && (
                          <div className='' >
                          <img
                            src="/images/fed.svg"
                            alt="Selected"
                            className="absolute bg-transparent rounded-full bottom-11 z-100 -right-2 w-5 h-5"
                          />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-4 mb-4 w-full">
                    <button
                      className="bg-red-500 h-12 text-white text-lg w-11/12 self-center font-semibold py-2 rounded-lg"
                      onClick={() => navigate('/feedback')}
                    >
                      Send Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </>
  );
};

export default HistoryDialog;
