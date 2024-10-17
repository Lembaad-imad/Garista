import React from 'react';
import ProductsList from './ProductsList';
import ProductCard from './ProductCard';
import useStore from '../../Zustand/Store';

const Products = () => {
  const noScrollbar = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflow: 'auto',
  };

  const { categorieChosen } = useStore();

  const filteredProducts = categorieChosen === 'All'
    ? ProductsList
    : ProductsList.filter((product) => product.category === categorieChosen);

  return (
    <div
      className="h-[500px] overflow-y-scroll grid grid-cols-2 mb-20  gap-4"
      style={noScrollbar}
    >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
