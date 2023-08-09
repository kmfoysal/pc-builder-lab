import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({allProducts}) => {
    return (
        <div className="px-[10%] py-[5%]">
        <h3 className="text-center text-5xl font-semibold mb-10">Featured Products</h3>

        <div className="grid grid-cols-3 justify-center justify-items-center gap-10">
          {allProducts?.map(
            (product) =>
              product.featured && (
                <ProductCard key={product?._id} product={product} />
              )
          )}
        </div>
      </div>
    );
};

export default FeaturedProducts;