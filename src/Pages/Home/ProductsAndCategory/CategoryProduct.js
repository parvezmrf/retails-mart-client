import React, { useState } from 'react';
import HeaderMain from '../Header/HeaderMain';
import Categories from './Categories';
import { useLoaderData } from "react-router-dom";
import ProductCard from './ProductCard';
import BookingProduct from './BookingProduct';


const Asus = () => {
    const products = useLoaderData()
    console.log(products)
    const [bookingProduct, setBookingProduct] = useState(null)

    return (
        <>
            <div>
                <HeaderMain></HeaderMain>

                <div className="lg:flex my-5 gap-4">
                    <div className="lg:w-1/3 "><Categories></Categories>  </div>
                    <div className='grid lg:grid-cols-3 gap-5' >
                        {
                            products.map((product, idx) => <ProductCard
                                key={idx}
                                product={product}
                                setBookingProduct={setBookingProduct}
                            ></ProductCard>)
                        }
                    </div>

                </div>

                {bookingProduct && <BookingProduct
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingProduct>
                }

            </div>
        </>
    );
};

export default Asus;



