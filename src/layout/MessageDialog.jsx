import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const MessageDialog = ({ setOpen, open }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative  z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative bottom-60 w-11/12 h-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
            <div className="sm:flex sm:items-start">
              <div className="flex justify-between w-11/12 ml-5 p-1">
                <div>
                  <img
                    src="images/waiter.svg"
                    className="flex-1 relative left-16 top-5 "
                  />
                </div>
                <div
                  className="self-center"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    src="images/cross.svg"
                    className="text-left mb-20 text-2xl"
                  />
                </div>
              </div>
              <div className="w-11/12 mt-8 flex flex-col justify-center gap-3  ml-4 ">
                <p className="font-medium text-3xl font-sans text-center">
                Are you sure you want The waiter to come to you
                </p>
                <p className="text-center text-xl text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. A fermentum non
                  volutpat sit nec.
                </p>
                <div className="flex gap-2 mt-4 mb-4">
                  <button
                    className="bg-red-500 h-12 text-white text-lg w-6/12 font-semibold py-2 text-nowrap px-5 rounded-lg"
              
                  >
                    Accept
                  </button>
                  <button
                    className="bg-transparent border-2 h-12 border-red-500 w-6/12 text-red-500 text-lg font-semibold text-nowrap py-2 px-5 rounded-lg"
                    onClick={() => {
                      setOpen(false);
                      navigate("/hompage");
                    }}
                  >
                    Annuler
                  </button>
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

export default MessageDialog;
