import React from 'react';
import Categories from './Categories';
import Products from './Products';

const ProductsAndCategory = () => {
    return (

        <div className="lg:flex my-5 gap-4">
            <div className="lg:w-1/3 "><Categories></Categories>  </div>
            <div className="lg:grow  "><Products></Products> </div>
        </div>
    );
};

export default ProductsAndCategory;