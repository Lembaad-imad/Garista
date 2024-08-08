import React, { useState } from 'react';

const Categories = () => {
  const categories = ["All", "Pizza", "Burger", "Pasta", "Dessert", "Salad", "Seafood", "Drinks"];
  const [categorieChosen,setCategorieChosen] =useState('All');
  
  const noScrollbar = {
    msOverflowStyle: 'none',  
    scrollbarWidth: 'none',   
    overflow: 'auto'
  };
  const HandleClickCategorie = (e) => {
    setCategorieChosen(e)
  }

  return (
    <div>
      <div className='flex justify-around gap-5' style={noScrollbar}>
        {categories.map((category, index) => (
          <div key={index} className='flex flex-col items-center justify-center w-24 h-20' 
          onClick={()=>HandleClickCategorie(category)} 
          >
            <p className={`text-sm mt-2 bg-secondary text-center p-2 w-24 rounded-lg shadow-md ${categorieChosen=== category && ' bg-red-600 text-white'}`} >{category}</p>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default Categories;
