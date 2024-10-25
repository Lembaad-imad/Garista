import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import useStore from "../Zustand/Store";

const InfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [count, setCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [extras, setExtras] = useState([]);
  const [total, setTotal] = useState(product.price);
  const [open, setOpen] = useState(false);
  const { setProductshop, productshop } = useStore();
  const [comment, setComment] = useState("");
  const noScrollbar = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflow: "auto",
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleExtraToggle = (extra) => {
    setExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((item) => item !== extra)
        : [...prevExtras, extra]
    );
  };

  useEffect(() => {
    const extraCost = extras.length * 1.99;
    const newTotal = (product.price + extraCost) * count;
    setTotal(newTotal.toFixed(2));
  }, [count, extras, product.price]);
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedOption,
      extras,
      count,
      total: parseFloat(total),
      comment,
    };
    setProductshop([...productshop, productToAdd]);
    setOpen(true);
  };

  return (
    <div className="h-[400px]">
      <div>
      <div
        className="absolute top-4  bg-transparent left-4 w-12 h-12 border rounded-xl flex justify-center items-center border-white z-50"
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardArrowLeft className="text-3xl text-white" />
      </div>
        <div className="">
          <img src="/images/imageinfo.svg" alt="" className="w-full " />
        </div>
        <div
          className="w-12 h-12 border rounded-xl flex justify-center items-center border-black relative bottom-[350px] left-8"
          onClick={() => navigate(-1)}
        >
          {/* <MdOutlineKeyboardArrowLeft className="text-3xl" /> */}
        </div>
        <div className="flex flex-col items-end w-full   mt-5   relative bottom-28 ">
          <div className="bg-white p-3 gap-2 rounded-tl-3xl items-center flex ">
          <div className="flex gap-2">
            <img
              src="/images/Clock.svg"
              alt="clock"
              className="w-5 h-5 self-center"
            />
            <span className="text-black font-medium">{product.time}</span>
          </div>
          <div className="flex items-center ">
            <div className=" self-center">
          <img
              src="/images/Star.svg"
              alt="clock"
              className="w-4 h-4 self-center"
            />
            </div>
            <span className="text-black font-medium text-base ml-1  ">
              {product.rating}
            </span>
          </div>
        </div>
        </div>
      </div>

      <div className="rounded-s-3xl  bg-transparent relative bottom-28">
        <div className="w-11/12 p-2 ml-4  flex justify-between">
          <p className="font-sans text-[26px] font-bold ">{product.name}</p>
        </div>
        <div className="w-11/12 p-2 ml-4 h-4 flex justify-between items-center">
          <p className="text-[22px] font-sans text-red-600 font-semibold">
            {product.price.toFixed(2)} MAD
          </p>
          <div className="flex items-center bg-[#FFF1E5] rounded-full p-2">
            <button
              className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
              onClick={handleDecrement}
            >
              <img src="/images/Line.svg" alt="minus" />
            </button>
            <p className="text-black text-2xl font-bold mx-4">{count}</p>
            <button
              className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white"
              onClick={handleIncrement}
            >
              <img src="/images/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="w-11/12 p-2 ml-4 mt-4">
          <p className="text-lg font-sans text-black">{product.des}</p>
        </div>
        <div
          className=" w-11/12 p-2  ml-4 "
          
        >
          <div>
            <p className="text-xl font-bold">Select size for your burger</p>
            <p className="text-gray-500 text-lg">Choose a maximum of 7 items</p>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {[
              `Small ${product.category}`,
              `Medium ${product.category}`,
              `Large ${product.category}`,
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center justify-between space-x-2 cursor-pointer"
              >
                <span className="text-gray-800 font-roboto font-normal text-lg">
                  {option}
                </span>

                <div className="flex gap-2">
                  <span className="text-lg font-normal text-[#F86A2E]">
                    {product.price.toFixed(2)} MAD
                  </span>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                      className="hidden"
                    />
                    <span
                      className={`form-radio h-6 w-6 rounded-full border-2 border-[#F86A2E]  ${
                        selectedOption === option
                          ? "bg-[#F86A2E] p-2 border-[#F86A2E]  shadow-[inset_0_0_0_2px_white]"
                          : " "
                      }`}
                    ></span>
                  </label>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-xl font-bold">Choose Your Extras</p>
            <p className="text-gray-500 text-">Choose a maximum of 7 items</p>
          </div>
          <div className="mt-1 flex flex-col gap-3">
            {[
              "Extra tomato",
              "Extra Sauce",
              "Extra fromage",
              "Extra onions",
            ].map((option, index) => (
              <div key={index} className="flex justify-between mt-2 ">
                <p className="text-xl font-normale">{option}</p>
                <div className="flex gap-2">
                  <span className="text-[#F86A2E] ml-2 text-base">
                    4.00 MAD
                  </span>
                  <button
                    className={` rounded-full flex justify-center items-center w-6 h-6 text-white ${
                      extras.includes(option) ? " " : "bg-[#F86A2E]"
                    }`}
                    onClick={() => handleExtraToggle(option)}
                  
                  >
                    {}
                    <img
                      src={`/images/${
                        !extras.includes(option) ? "plus" : "valide"
                      }.svg`}
                      alt={extras.includes(option) ? "valide" : "plus"}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xl font-sans text-black font-bold">Note</p>
            <textarea
              name="comment"
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
              className="border p-2 rounded-md w-full mt-2"
              placeholder="Add a note..."
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-11/12 p-2 ml-4 mt-4 flex justify-between items-center">
            <p className="text-xl font-sans font-bold text-black">Total</p>
            <p className="text-xl font-sans text-black font-bold">${total}</p>
          </div>
          <button
            className="w-11/12 h-12 text-white  text-lg mb-7 rounded-xl bg-red-600 self-center"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
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
                      <img src="images/cart.svg" className="ml-5 " />
                    </div>
                    <div
                      className="self-center cursor-pointer"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <img
                        src="images/exist.svg"
                        className="w-4 h-4 relative bottom-14"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-8 flex flex-col justify-center items-center gap-3 ">
                    <p className="font-medium text-xl sm:text-3xl font-sans text-center">
                      Added To Cart!
                    </p>
                    <p className="text-center text-sm sm:text-xl text-gray-500">
                      Your item has been successfully added. You can view your
                      cart or continue shopping.
                    </p>

                    <div className="flex flex-col gap-2 mt-4 mb-4 w-full ">
                      <button
                        className="bg-red-500 h-12 text-white text-lg w-11/12  self-center font-semibold py-2 rounded-lg"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Go to Cart
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

export default InfoPage;
