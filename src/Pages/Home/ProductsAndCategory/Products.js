import React, { useState } from 'react';
import BookingProduct from './BookingProduct';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query'
import BookingReport from './BookingReport';

const Products = () => {

    const [bookingProduct, setBookingProduct] = useState(null)
    const [bookingRepo, setBookingRepo] = useState(null)



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
                        setBookingRepo={setBookingRepo}
                    ></ProductCard>)
                }


            </div>
            {bookingProduct &&
                <BookingProduct
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingProduct>}

            {bookingRepo &&
                <BookingReport
                    bookingRepo={bookingRepo}
                    setBookingRepo={setBookingRepo}
                ></BookingReport>}

        </section>

    );
};

export default Products;