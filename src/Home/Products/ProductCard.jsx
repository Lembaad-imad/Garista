import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-xl p-1  bg-white flex flex-col gap-2 shadow-md">
     
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="flex items-center justify-between w-11/12 ml-2">
      <div className="flex w-screen justify-between items-center">
          <span className="text-yellow-500">★ <span className='text-black'> {product.rating}</span></span>
          <div className='flex gap-1'>
            <img src='/images/Clock.svg' alt='clock' className='w-4 h-4 self-center' />
            <span className="text-gray-500">{product.time}</span>
          </div>
        </div>
      </div>
      <h3 className=" text-xl font-sans text-left overflow-hidden ml-2 text-ellipsis whitespace-nowrap max-w-full">{product.name}</h3>

      <div className="flex justify-between items-center w-11/12 ml-2">
        <span className="text-red-500 font-bold">$ {product.price.toFixed(2)}</span>
        <div className="bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white">
          <p className="text-xl font-bold">
            <img src='/images/plus.svg' alt='plus' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
