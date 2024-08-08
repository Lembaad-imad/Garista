import React from 'react'
import ProductsList from './ProductsList'
import ProductCard from './ProductCard'

const Products = () => {
  const noScrollbar = {
    msOverflowStyle: 'none',  
    scrollbarWidth: 'none',   
    overflow: 'auto'
  };
  return (
    <div className="h-[500px] overflow-y-scroll grid grid-cols-2 gap-4"
    style={noScrollbar}
    >
      {ProductsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
