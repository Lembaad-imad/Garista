import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import useStore from "../Zustand/Store";
import BottomNav from "../layout/BottomNav";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ProcessIndicator from "./ProcessIndicator";
const Cart = () => {
  const { setProductshop, productshop } = useStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirme, setConfirme] = useState(true);
  const [proccesShow, setProccesShow] = useState(true);
  const [totalSum, setTotalSum] = useState(0);

  const noScrollbar = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflow: "auto",
  };
  console.log(productshop);
  useEffect(() => {
    const initializedProducts = productshop.map((item) => ({
      ...item,
      quantity: item.count || 1,
    }));
    setProductshop(initializedProducts);
  }, []);

  useEffect(() => {
    const sum = productshop.reduce((acc, item) => {
      const itemTotal = parseFloat(item.total) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return acc + itemTotal * itemQuantity;
    }, 0);
    setTotalSum(sum);
  }, [productshop]);
  useEffect(() => {
    if (!proccesShow) {
      const timer = setTimeout(() => {
        setProccesShow(true);
      }, 10000); 
  
      return () => clearTimeout(timer); 
    }
  }, [proccesShow]);

  const handleIncrement = (index) => {
    const updatedProducts = [...productshop];
    updatedProducts[index].quantity =
      (updatedProducts[index].quantity || 1) + 1;
    setProductshop(updatedProducts);
  };

  const handleDecrement = (index) => {
    const updatedProducts = [...productshop];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
    }
    setProductshop(updatedProducts);
  };

  const handleRemoveProduct = (name) => {
    setProductshop(productshop.filter((item) => item.name !== name));
  };

  return (
    <div>
      <div className="flex mt-5 w-11/12 ml-5 p-1">
        <div
          className="w-10 h-10 border rounded-md flex justify-center items-center border-black"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardArrowLeft className="text-3xl" />
        </div>
        <p className="flex-1 text-center mr-5 font-sans text-2xl font-bold">
          My Cart
        </p>
      </div>
      <div className="h-[1px] mt-7 bg-gray-300"></div>
      <BottomNav />
     {
      !proccesShow&& <ProcessIndicator />
     }
      <div
        className="overflow-y-scroll w-11/12 p-2 h-[400px] ml-4 mt-6"
        style={noScrollbar}
      >
        {productshop.length === 0 ? (
          <div className="text-center mt-20">
            <img
              src="images/Group.svg"
              alt="Cart is empty"
              className="mx-auto"
            />
            <p className="text-xl font-sans font-bold mt-4">
              Your Cart is Empty
            </p>
            <p className="text-gray-500 mt-2">
              Looks like you haven't made your choice yet...
            </p>
            <p
              className="text-lg text-red-500 font-bold mt-6"
              onClick={() => navigate("/hompage")}
            >
              + Add more items
            </p>
          </div>
        ) : (
          <ul>
            {productshop.map((item, index) => (
              <li
                key={index}
                className="flex justify-between mb-1 mt-5 hover:bg-gray-100"
              >
                <div className="bg-[#ffd9d7] p-2 h-28 rounded-2xl w-36 border-2 border-pink-200">
                  <img
                    src={item.image}
                    className="items-center self-center justify-center mt-2 w-32"
                    alt={item.name}
                  />
                </div>
                <section className="flex flex-col gap-1 text-right w-11/12">
                  <div className="flex text-right justify-between w-11/12 ml-4">
                    <div className="p-1">
                      <p className="font-bold font-roboto text-2xl">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 ml-5">
                    <p className="text-red-600 font-sans text-xl font-bold">
                      $ {item.price.toFixed(2).slice(0, 2) * item.quantity}
                      <span className="text-lg">
                        {item.price.toFixed(2).slice(2)}
                      </span>
                    </p>
                  </div>

                  <div className="flex text-right justify-between w-11/12 ml-5">
                    <div className="flex items-center rounded-full">
                      <button
                        className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
                        onClick={() => handleDecrement(index)}
                      >
                        <img src="/images/Line.svg" alt="minus" />
                      </button>
                      <p className="text-black text-xl mx-4">
                        {item.quantity || 1}
                      </p>
                      <button
                        className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
                        onClick={() => handleIncrement(index)}
                      >
                        <img src="/images/plus.svg" alt="plus" />
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-5">
                        <p className="text-lg text-gray-400">
                          {item.selectedOption.split(" ")[0]}
                        </p>
                        <div
                          className="self-center"
                          onClick={() => handleRemoveProduct(item.name)}
                        >
                          <img
                            src="images/cross.svg"
                            className="text-left font-bold text-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        )}
        {productshop.length !== 0 && (
          <div className="mt-6" onClick={() => navigate("/hompage")}>
            <p className="text-lg text-red-500 font-bold">+ Add more items</p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full fixed bottom-16">
        <div className="w-11/12 p-2 ml-4 mt-4 flex justify-between items-center">
          <p className="text-xl font-sans font-bold text-black">Total</p>
          <p className="text-xl font-sans text-black font-bold">
            ${totalSum.toFixed(2)}
          </p>
        </div>
        <button
          className={`w-11/12 h-16 text-white text-xl mb-7 rounded-xl self-center ${
            productshop.length === 0 ? "bg-red-200" : "bg-red-600"
          }`}
          onClick={() => {
            setOpen(true);
            setConfirme(true);
          }}
          disabled={productshop.length === 0}
        >
          Checkout
        </button>
      </div>
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
                        src={`images/${confirme ? "drink" : "confirme"}.svg`}
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
                      {confirme
                        ? "Are you sure you want order this item"
                        : "Thank you for ordering!"}
                    </p>
                    <p className="text-center text-xl text-gray-500">
                      Lorem ipsum dolor sit amet consectetur. A fermentum non
                      volutpat sit nec.
                    </p>
                    <div className="flex gap-2 mt-4 mb-4">
                      <button
                        className="bg-red-500 h-12 text-white text-lg w-6/12 font-semibold py-2 text-nowrap px-5 rounded-lg"
                        onClick={
                          confirme
                            ? () => {
                                navigate("/cart");
                                setConfirme(false);
                                console.log('co')
                              }
                            : () => {
                                navigate("/cart");
                                setConfirme(false);
                               setProccesShow(false)
                               setOpen(false)
                               setProductshop([]);

                              }
                        }
                      >
                        {confirme ? "Confirmer" : "See Process"}
                      </button>
                      <button
                        className="bg-transparent border-2 h-12 border-red-500 w-6/12 text-red-500 text-lg font-semibold text-nowrap py-2 px-5 rounded-lg"
                        onClick={() => {
                          setOpen(false);
                          navigate("/hompage");
                        }}
                      >
                        {confirme ? "Annuler" : "Back home"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
