import React from 'react';

const ProductCard = ({ product, setBookingProduct }) => {
    const {
        title, img, core, ram, os, org_price, offer_price,
        used_time, category: brand, seller, post_date, location
    } = product;
    return (

        <div className="card bg-base-100 shadow-xl">

            <figure><img className='p-3 h-60' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <ul className='list-disc ml-6' >
                    <div className="badge badge-accent badge-outline"> {brand}  </div>  ({used_time} year used) <br />
                    <span>Location: {location} </span>

                    <li> {core} </li>
                    <div className='flex justify-between'>
                        <li> {ram} </li>
                        <li> {os} </li>
                    </div>
                </ul>
                <p className='flex justify-between px-3'> <span>Price: ${offer_price}</span>  <span>Original Price: $ <span className='line-through'>{org_price}</span></span>  </p>
                <div className='flex justify-between' >
                    <ul>
                        <li>Seller: {seller}</li>
                        <li><small>Post Date: {post_date} </small> </li>

                    </ul>

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-outline btn-primary"
                        onClick={() => setBookingProduct(product)}
                    >Get</label>

                </div>
            </div>
        </div>

    );
};

export default ProductCard;