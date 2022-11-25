import React from 'react';
import Categories from './Categories';
import Products from './Products';

const ProductsAndCategory = () => {
    return (

        <div className="flex my-5 gap-4">
            <div className="w-1/3 "><Categories></Categories>  </div>
            <div className="grow  "><Products></Products> </div>
        </div>
    );
};

export default ProductsAndCategory;