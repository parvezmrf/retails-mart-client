import React, { useContext } from 'react';
import { AuthContex } from '../../../contexts/AuthProvider';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const AddProduct = ({ bookingProduct, setBookingProduct }) => {
    const dateTime = new Date().toLocaleString();
    const { user } = useContext(AuthContex)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productTitle = bookingProduct.title
        const price = bookingProduct.offer_price
        const name = form.name.value
        const email = form.email.value
        const location = form.location.value
        const img = bookingProduct.img



        const bookingFromModal = {
            product: productTitle,
            price,
            name,
            email,
            location,
            dateTime,
            img
        }
        // console.log(bookingFromModal)
        fetch('https://retails-mart-server.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingFromModal)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    setBookingProduct(null)
                    toast.success('Booking Confirmed!!', {
                        duration: 2000
                    })


                }
            })


        // console.log(bookingFromModal)
    }



    return (
        <>



            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  max-w-xl">
                    <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    {user?.uid ? <>
                        <h3 name='title' className="text-sm font-bold">{bookingProduct.title}</h3>
                        <p className='text-xl font-semibold'>Price: ${bookingProduct?.offer_price} </p>
                        <h3 className="text-sm font-semibold"> Seller Name: {bookingProduct.seller}</h3>

                        <span className="label-text">Date of Booking (dd/mm/yyyy) </span>
                        <input type="text-5xl font-semibold" value={dateTime} className="input input-bordered w-full" disabled />
                        <form onSubmit={handleBooking} className='mx-auto'>

                            <span className="label-text">Your name</span>
                            <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered input-primary w-full mb-3" />

                            <span className="label-text">Your Email</span>
                            <input name='email' type="text" defaultValue={user?.email} className="input input-bordered input-primary w-full mb-3" disabled />

                            <span className="label-text">Where to deliever </span>
                            <input name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" required />

                            <input type="submit" className='btn btn-primary w-full' value="Book Now" />
                        </form>

                    </>
                        :
                        <>

                            <h3 name='title' className="text-sm font-bold">{bookingProduct.title}</h3>
                            <p className='text-xl font-semibold'>Price: ${bookingProduct?.offer_price} </p>
                            <h3 className="text-sm font-semibold"> Seller Name: {bookingProduct.seller}</h3>

                            <h3 name='title' className="text-2xl font-bold">Please
                                <Link to='/login'> <button className='btn btn-outline btn-primary'>Login</button> </Link>
                                or
                                <Link to='/register'> <button className='btn btn-outline btn-primary'>Register</button> </Link>

                                to make any order</h3>



                        </>
                    }


                </div>
            </div>
        </>
    );
};

export default AddProduct;