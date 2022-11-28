import React, { useEffect, useState } from 'react';
import verify from '../../../assets/veryfied.png'

const ProductCard = ({ product, setBookingProduct }) => {
    const {
        title, img, core, ram, os, org_price, offer_price,
        used_time, category, seller, post_date, location, email, profile
    } = product;

    const [profilestatus, SetProfilestatus] = useState([])

    useEffect(() => {
        fetch(`https://retails-mart-server.vercel.app/user?email=${email}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                SetProfilestatus(data)
            })
    }, [email])


    console.log(profilestatus)



    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img className='p-3 h-60' src={img} alt="Shoes" /></figure>
            <div className="badge badge-outline mx-5">{post_date}</div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <ul className='list-disc ml-6' >
                    <div className="badge badge-accent badge-outline"> {category}  </div>  ({used_time} year used) <br />
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
                        <li className='flex items-center'>Name: {seller}  {
                            profilestatus.profile === "verified" ? <>

                                <span> <img className='w-4 mx-1' src={verify} alt="Shoes" /> </span>

                            </> : ''
                        } </li>

                    </ul>

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-outline btn-primary"
                        onClick={() => setBookingProduct(product)}>
                        Book this
                    </label>

                </div>
            </div>
        </div>

    );
};

export default ProductCard;