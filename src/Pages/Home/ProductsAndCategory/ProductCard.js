import React from 'react';

const ProductCard = ({ product }) => {
    const { title, img, processor, core, ram, os, org_price, used_time, category } = product;
    return (

        <div className="card bg-base-100 shadow-xl">

            <figure><img className='p-3 h-60' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge badge-accent badge-outline"> {category} </div>
                <div className="badge badge-accent badge-outline"> Posted </div>
                <h2 className="card-title">{title}</h2>

                <ul className='list-disc ml-6' >
                    <li>{processor}</li>
                    <li> {core} </li>
                    <li> {ram} </li>
                    <li> {os} </li>
                </ul>
                <p>Price: ${org_price} ({used_time} year used) </p>

            </div>
        </div>

    );
};

export default ProductCard;