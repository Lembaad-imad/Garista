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
  const { setProductshop, productshop,navButtons } = useStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirme, setConfirme] = useState(true);
  const [proccesShow, setProccesShow] = useState(true);
  const [detailsShow, setDetailsShow] = useState(true);
  const [totalSum, setTotalSum] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);
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
  const HandleCliclProduct = (index) => {
    setActiveProductIndex(activeProductIndex === index ? null : index);
  };
  const handleShowDetails = (index) => {
    setShowDetailsIndex(showDetailsIndex === index ? null : index);
  };
  const hnadleClearCard = ()=>{
    setProductshop([])
  }
  return (
    <div className="relative">
    {/* Overlay when navButtons is true */}
    {navButtons && (
      <div className="fixed inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>
    )}
      <div className="flex  flex-col justify-center  mt-5 w-11/12 ml-5 p-1">
        <p className="flex-1  text-center text-gray-800  font-sans text-2xl font-bold">
          My Cart
        </p>
        {!proccesShow && <ProcessIndicator />  }
       
        <div className="w-full  self-center mt-6 flex justify-between">
          <p className="font-bold text-lg">Table:003</p>
          <p
            className={`font-semibold text-lg text-btncollor underline underline-offset-4 ${
              productshop.length === 0 ? "opacity-50" : ""
            }`}
            onClick={hnadleClearCard}
          >
            Clear Card
          </p>
        </div>
      </div>
      <BottomNav />
 
      <div
  className="overflow-y-scrollbg-red-300  max-h-[calc(110vh-390px)]  w-11/12 p-1 ml-4 "
  style={noScrollbar}
>
        {productshop.length === 0 ? (
          <div className={`flex flex-col justify-center items-center w-full text-center ${!proccesShow ? 'h-[250px] overflow-y-scrollbg' :""}`}
          // style={noScrollbar}
          >
            <img
              src="images/Group.svg"
              alt="Cart is empty"
              className={`mx-auto  w-44 ${!proccesShow &&  'mt-5'}`}
            />
            <p className="text-xl font-sans font-bold mt-4">
              Your Cart is Empty
            </p>
            <p className="text-gray-500 mt-2">
              Looks like you haven't made your choice yet...
            </p>
            <p
              className="text-lg text-red-500 font-bold mt-6 cursor-pointer"
              onClick={() => navigate("/hompage")}
            >
              + Add more items
            </p>
          </div>
        ) : (
          <ul>
          {productshop.map((item, index) => (
  <li key={index} onClick={() => HandleCliclProduct(index)}>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between mb-1 mt-5 hover:bg-gray-100">
        <div>
          <img
            src={item.image}
            className="items-center self-center justify-center rounded-2xl mt-2 w-40"
            alt={item.name}
          />
        </div>
        <section className="flex flex-col  gap-2 text-right w-11/12">
          <div className="flex text-right justify-between w-11/12 ml-4">
            <div className="p-1 flex justify-between w-full">
            <p className="font-normal font-roboto text-left w-40 text-lg truncate overflow-hidden whitespace-nowrap">
    {item.name}
</p>
              <div
                className="self-center"
                onClick={(e) => {
                  handleRemoveProduct(item.name);
                  e.stopPropagation();
                }}
              >
                <img
                  src="images/cross.svg"
                  className="text-left font-bold text-red-600 text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between ml-5">
            <p className="text-red-600 font-sans text-base font-semibold">
              {item.price.toFixed(2) * item.quantity} MAD
            </p>
            <div className="flex items-center bg-[#FFF1E5] rounded-full w-24 border-2 border-red-200 p-1">
              <button
                className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
                onClick={(e) => {
                  handleDecrement(index);
                  e.stopPropagation();
                }}
              >
                <img src="/images/Line.svg" alt="minus" />
              </button>
              <p className="text-black text-xl font-semibold mx-4">
                {item.quantity || 1}
              </p>
              <button
                className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
                onClick={(e) => {
                  handleIncrement(index);
                  e.stopPropagation();
                }}
              >
                <img src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </section>
      </div>
      {(item.comment || item.extras.length !== 0) && (
  <div className="flex flex-col items-start gap-2 text-right w-full transition-all duration-300 ease-out transform">
    <div
      className="flex justify-between w-full cursor-pointer"
      onClick={(e) => {
        handleShowDetails(index);
        e.stopPropagation();
      }}
    >
      <p>Order Details</p>
      <svg
        className="w-6 h-6 transition-transform duration-300 ease-out"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{
          transform: showDetailsIndex === index ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <path d="M5.292 7.293a1 1 0 011.415 0L10 10.585l3.293-3.292a1 1 0 111.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z" />
      </svg>
    </div>

    {showDetailsIndex === index && (
      <div className="mt-2 text-left">
        
          <p>
            <strong className="text-gray-700">Sauce : </strong>
            <span className="text-gray-400">Sauce</span>
          </p>
       
        
          <p>
            <strong className="text-gray-700">Ingredients : </strong>
            <span className="text-gray-400">{item.extras.join(',')}</span>
          </p>
       
        
          <p>
            <strong className="text-gray-700">Comment : </strong>
            <span className="text-gray-400">{item.comment}</span>
          </p>
        
      </div>
    )}
  </div>
)}

    </div>
  </li>
))}

          </ul>
        )}
      </div>
        <div className="border-b-[1px] z-10 fixed bottom-52 border-gray-400 w-full mx-auto "></div>
      <div className="flex flex-col w-full  fixed bottom-16">
        <div className="w-11/12 p-2 ml-4 mt-4 flex justify-between items-center">
          <p className="text-xl font-sans font-bold text-black">Total</p>
          <p className="text-xl font-sans text-black font-bold">
            ${totalSum.toFixed(2)}
          </p>
        </div>
        <button
          className={`w-11/12 h-12 z-10  text-white text-xl mb-12 rounded-xl self-center ${
            productshop.length === 0 ? "bg-red-200 " : "bg-red-600"
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
      {/* <Dialog open={open} onClose={setOpen} className="relative  z-10">
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
                                console.log("co");
                              }
                            : () => {
                                navigate("/cart");
                                setConfirme(false);
                                setProccesShow(false);
                                setOpen(false);
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
      </Dialog> */}
          <Dialog open={open} onClose={setOpen} className="relative z-10">
  <DialogBackdrop
    transition
    className="fixed inset-0 bg-black bg-opacity-40 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
  />

  <div className="fixed inset-0 z-10 w-screen flex items-center justify-center overflow-y-auto">
    <div className="flex min-h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
      <DialogPanel
        transition
        className="relative w-full max-w-md h-auto transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-full sm:max-w-lg sm:my-8"
      >
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="flex flex-col">
            <div className="flex justify-between w-full sm:w-11/12 ml-0 sm:ml-5 p-1">
              <div className="relative flex  w-full items-center justify-center">
                <img
                   src={`images/${confirme ? "drink" : "confirmecheck"}.svg`}
                  className="ml-5 "
                />
              </div>
              <div
                className="self-center cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                              <img
                        src="images/exist.svg"
                        className="w-4 h-4 relative bottom-16"
                      />
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col justify-center items-center gap-3 ">
              <p className="font-bold text-xl sm:text-3xl font-sans text-center">
              {confirme
                        ? "Confirm Order"
                        : "Order Confirmed!"}
              </p>
              <p className="text-center text-sm w-80 text-gray-500">
              {confirme
                        ? "Are you ready to place your order? Your selected items will be submitted."
                        : "Your order has been placed. Enjoy your meal! "}
              
              
              </p>

              <div className="flex flex-row gap-2 mt-4 mb-4 w-full ">
                {
                  confirme && 
                  <button
                  className=" bg-transparent border-2 h-12 border-red-500 text-red-500  text-lg w-11/12  self-center font-semibold py-2 rounded-lg"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Cancel
                </button>
                }
               
                <button
                  className=" bg-red-500   h-12 text-white  w-full  text-lg font-semibold py-2 rounded-lg"
                  onClick={
                    confirme
                      ? () => {
                          navigate("/cart");
                          setConfirme(false);
                          console.log("co");
                        }
                      : () => {
                          navigate("/cart");
                          setConfirme(false);
                          setProccesShow(false);
                          setOpen(false);
                          setProductshop([]);
                        }
                  }
                >
                  Confirme
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
