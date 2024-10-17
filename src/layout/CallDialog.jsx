import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const CallDialog = ({ setOpen, open }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
    <DialogBackdrop
      transition
      className="fixed  inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed  inset-0 z-10 w-screen flex items-center justify-center overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative  bottom-28 w-full max-w-md h-auto transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-full sm:max-w-lg sm:my-8"
        >
          <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="flex justify-between w-full sm:w-11/12 ml-0 sm:ml-5 p-1">
                <div className="relative flex  w-full items-center justify-center">
                  <img src="images/confirmwaiter.svg" className="ml-5 " />
                </div>
                <div
                  className="self-center cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    src="images/exist.svg"
                    className="w-6 h-6 relative bottom-14"
                  />
                </div>
              </div>

              <div className="w-full mt-8 flex flex-col justify-center items-center gap-3 ">
                <p className="font-bold text-xl sm:text-3xl font-sans text-center">
                Confirm Call Waiter
                </p>
                <p className="text-center text-sm sm:text-xl text-gray-500">
                Are you sure you want to call a waiter? They will come to your table shortly.
                </p>

                <div className="flex flex-col gap-2 mt-4 mb-4 w-full ">
                  <button
                    className="bg-red-500 h-12 text-white text-lg w-11/12  self-center font-semibold py-2 rounded-lg"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Confirme
                  </button>
                  {/* <button
              className="bg-transparent border-2 h-12 border-red-500 w-full sm:w-6/12 text-red-500 text-lg font-semibold py-2 rounded-lg"
              onClick={() => {
                navigate("/homepage");
              }}
            >
              Back Home
            </button> */}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  );
};

export default CallDialog;
