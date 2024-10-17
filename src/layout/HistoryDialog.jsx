import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const HistoryDialog = ({ setOpen, open }) => {
  const [rating, setRating] = useState(3);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const getEmojiImage = (index) => {
    const emojiImages = [
      { active: 'images/worstNoCollor.svg', inactive: 'images/worstCollor.svg' },
      { active: 'images/fineCollor.svg', inactive: 'images/fineNoCollor.svg' },
      { active: 'images/NeutreCollor.svg', inactive: 'images/neutreNoCoolor.svg' },
      { active: 'images/GoodCollor.svg', inactive: 'images/GoodNoCollor.svg' },
      { active: 'images/loveCollor.svg', inactive: 'images/loveNoCollor.svg' },
    ];

    return rating === index ? emojiImages[index - 1].active : emojiImages[index - 1].inactive;
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative  z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0  bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed inset-0  w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative bottom-36  w-11/12 h-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className=" z-10 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
            <div className="sm:flex sm:items-start">
              <div className="flex justify-between w-11/12 ml-5 p-1">
           
                <div
                  className="self-center"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    src="images/cross.svg"
                    className="text-left  text-2xl"
                  />
                </div>
              </div>
              <div className="w-11/12 mt-8 flex flex-col justify-center gap-3 ml-4">
                  <div>
                    <p className="text-2xl font-bold font-sans">
                      Rate Your Experience 
                    </p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                      <label className='font-bold text-xl'>Full Name</label>
                      <input type="text" className='border-2 p-2 shadow-md rounded-lg border-gray-600 h-12' placeholder='Enter your Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label className='font-bold text-xl'>Email or Phone Number</label>
                      <input type="text" className='border-2 p-2 shadow-md rounded-lg border-gray-600 h-12' placeholder='Enter your Email or phone' />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-xl">Rate Your Experience</label>
                    <div className="flex items-center justify-between w-full">
                      {Array.from({ length: 5 }, (_, index) => (
                        <img
                          key={index + 1}
                          src={getEmojiImage(index + 1)}
                          alt={`emoji-${index + 1}`}
                          className="w-10 h-10"
                        />
                      ))}
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={rating}
                      onChange={handleRatingChange}
                      className="slider w-full h-2 bg-red-500 rounded-full appearance-none mt-4"
                      style={{
                        background: `linear-gradient(to right, #EF4444 ${(rating - 1) * 25}%, #E5E7EB ${(rating - 1) * 25}%)`
                      }}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='font-bold text-xl'>Add your comments...</label>
                    <textarea className='border-2 p-2 shadow-md rounded-lg border-gray-600 h-24' placeholder='Add your comments...' />
                  </div>
                  <button className="mt-4 p-2 bg-red-500 text-white font-bold rounded-lg">
                    SUBMIT
                  </button>
                </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  );
};

export default HistoryDialog;
