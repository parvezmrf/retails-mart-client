import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, SetProducts] = useState([])

    useEffect(() => {
        fetch('/xata2.json')
            .then(res => res.json())
            .then(data => {
                SetProducts(data)
                console.log(data)
            })
    }, [])


    return (
        <div className='grid lg:grid-cols-3 gap-5 my-5' >

            {
                products.map((product, idx) => <ProductCard
                    key={idx}
                    product={product}
                ></ProductCard>)
            }


        </div>
    );
};

export default Products;