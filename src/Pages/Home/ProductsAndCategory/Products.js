import React, { useState } from 'react';
import BookingProduct from './BookingProduct';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query'

const Products = () => {

    const [bookingProduct, setBookingProduct] = useState(null)

    const [addproduct, SetAddProduct] = useState({})

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://retails-mart-server.vercel.app/products');
            const data = res.json();
            return data
        }
    })



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