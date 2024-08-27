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
    };
    setProductshop([...productshop, productToAdd]); 
    setOpen(true);
  };

  return (
    <div className="h-[400px]">
      <div>
        <div className="bg-[#ffd9d7] h-96 flex items-center justify-center">
          <img src={product.image} alt="" className="w-64" />
        </div>
        <div
          className="w-12 h-12 border rounded-xl flex justify-center items-center border-black relative bottom-[350px] left-8"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardArrowLeft className="text-3xl" />
        </div>
      </div>

      <div className="rounded-s-3xl bg-white relative bottom-40">
        <div className="w-11/12 p-2 ml-4 mt-8 flex justify-between">
          <p className="font-sans text-2xl font-bold mt-4">{product.name}</p>
          <div className="flex items-center mt-4">
            <span className="text-[#EF8800] text-2xl">★</span>
            <span className="text-black text-2xl ml-1 font-bold">
              {product.rating}
            </span>
            <span className="text-sm text-black ml-2 font-bold">
              (41 Reviews)
            </span>
          </div>
        </div>
        <div className="w-11/12 p-2 ml-4 mt-4 flex justify-between items-center">
          <p className="text-4xl font-sans text-red-600 font-bold">
            $ {product.price.toFixed(2)}
          </p>
          <div className="flex items-center bg-[#FFF1E5] rounded-full p-2">
            <button
              className="bg-red-500 rounded-full flex justify-center items-center w-8 h-8 text-white"
              onClick={handleDecrement}
            >
              <img src="/images/Line.svg" alt="minus" />
            </button>
            <p className="text-black text-2xl font-bold mx-4">{count}</p>
            <button
              className="bg-red-500 rounded-full flex justify-center items-center w-8 h-8 text-white"
              onClick={handleIncrement}
            >
              <img src="/images/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="w-11/12 p-2 ml-4 mt-4">
          <p className="text-xl font-sans text-black">{product.des}</p>
        </div>
        <div
          className="overflow-y-scroll w-11/12 p-2 h-[250px] ml-4 mt-4"
          style={noScrollbar}
        >
          <div>
            <p className="text-2xl font-bold">Select size for your burger</p>
            <p className="text-gray-500 text-xl">Choose a maximum of 7 items</p>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {[
              `Small ${product.category}`,
              `Medium ${product.category}`,
              `Large ${product.category}`,
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center justify-between space-x-2 cursor-pointer"
              >
                <span className="text-gray-800 font-roboto font-bold text-xl">
                  {option}
                  <span className="text-lg ml-4 text-[#EF8800]">
                    {product.price.toFixed(2)}$
                  </span>
                </span>
                <input
                  type="radio"
                  name="sort"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="form-radio h-6 w-6"
                />
              </label>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-2xl font-bold">Choose Your Extras</p>
            <p className="text-gray-500 text-xl">Choose a maximum of 7 items</p>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {[
              "Extra tomato",
              "Extra Sauce",
              "Extra fromage",
              "Extra onions",
            ].map((option, index) => (
              <div
                key={index}
                className={`flex justify-between mt-3 ${
                  index !== 3 ? "border-b-2" : ""
                } pb-3`}
              >
                <p className="text-xl font-bold">
                  {option}
                  <span className="text-[#EF8800] ml-2 text-lg">1.99$</span>
                </p>
                <button
                  className={`bg-[#EF8800] rounded-full flex justify-center items-center w-6 h-6 text-white ${
                    extras.includes(option) ? "opacity-50" : ""
                  }`}
                  onClick={() => handleExtraToggle(option)}
                  // disabled={extras.includes(option)}
                >
                  <img src="/images/plus.svg" alt="plus" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <p className="text-xl font-sans text-black font-bold">
              Add Comment
            </p>
            <textarea
              name="comment"
              className="w-full border-2 p-1 h-20 mt-3 rounded-lg border-gray-500 text-gray-600"
              placeholder="Add any special requests or notes here..."
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-11/12 p-2 ml-4 mt-4 flex justify-between items-center">
            <p className="text-xl font-sans font-bold text-black">Total</p>
            <p className="text-xl font-sans text-black font-bold">${total}</p>
          </div>
          <button
            className="w-11/12 h-16 text-white  text-xl mb-7 rounded-xl bg-red-600 self-center"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
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
                        src="images/cart.svg"
                        className="flex-1 relative left-16 top-5 ml-5"
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
                      Successfully added to card
                    </p>
                    <p className="text-center text-xl text-gray-500">
                      Lorem ipsum dolor sit amet consectetur. A fermentum non
                      volutpat sit nec.
                    </p>
                    <div className="flex gap-2 mt-4 mb-4">
                      <button
                        className="bg-red-500 h-12 text-white text-lg w-6/12 font-semibold py-2 text-nowrap px-5 rounded-lg"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Go to Cart
                      </button>
                      <button
                        className="bg-transparent border-2 h-12 border-red-500 w-6/12 text-red-500 text-lg font-semibold text-nowrap py-2 px-5 rounded-lg"
                        onClick={() => {
                          navigate("/hompage");
                        }}
                      >
                        Back Home{" "}
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
