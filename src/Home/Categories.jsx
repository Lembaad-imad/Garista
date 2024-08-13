import React from 'react';
import useStore from '../Zustand/Store';

const Categories = () => {
  const categories = ["All", "Pizza", "Burger", "Pasta", "Dessert", "Salad", "Seafood", "Drinks"];
  const { categorieChosen, setCategorieChosen } = useStore();

  const noScrollbar = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflow: 'auto',
  };

  return (
    <div>
      <div className='flex justify-around gap-5' style={noScrollbar}>
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center w-24 h-20'
            onClick={() => setCategorieChosen(category)}
          >
            <p
              className={`text-sm mt-2 text-center p-2 w-24 rounded-lg shadow-md ${
                categorieChosen === category ? ' bg-red-600 text-white' : 'bg-secondary'
              }`}
            >
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
