import React, { useEffect, useState } from 'react';
import BookingProduct from './BookingProduct';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, SetProducts] = useState([])
    const [bookingProduct, setBookingProduct] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                SetProducts(data)
                console.log(data)
            })
    }, [])


    return (
        <section className=' my-5' >
            <div className='grid lg:grid-cols-3 gap-5' >

                {
                    products.map((product, idx) => <ProductCard
                        key={idx}
                        product={product}
                        setBookingProduct={setBookingProduct}
                    ></ProductCard>)
                }


            </div>
            {bookingProduct &&
                <BookingProduct
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingProduct>}
        </section>

    );
};

export default Products;