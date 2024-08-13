import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="h-64 rounded-xl p-3  bg-white flex flex-col items-center shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex w-screen justify-between items-center">
          <span className="text-yellow-500">★ {product.rating}</span>
          <div className='flex gap-1'>
            <img src='/images/Clock.svg' alt='clock' className='w-4 h-4 self-center' />
            <span className="text-gray-500">{product.time}</span>
          </div>
        </div>
      </div>
      <img src={product.image} alt={product.name} className="w-24 h-24 my-4" />
      <h3 className="font-bold text-xl font-sans text-center overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{product.name}</h3>
      <p className="text-sm my-2 text-center overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{product.description}</p>
      <div className="flex justify-between items-center w-full">
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
