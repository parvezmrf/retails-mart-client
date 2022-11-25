import React from 'react';
import toast from 'react-hot-toast';

const BookingProduct = ({ bookingProduct, setBookingProduct }) => {

    const dateTime = new Date();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productTitle = bookingProduct.title
        const price = bookingProduct.offer_price
        const name = form.name.value
        const email = form.email.value
        const location = form.location.value



        const booking = {
            product: productTitle,
            price,
            name,
            email,
            location,
            dateTime
        }


        console.log(booking)
        toast.success('confirm')
        setBookingProduct(null)
    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  max-w-xl">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 name='title' className="text-sm font-bold">{bookingProduct.title}</h3>
                    <p className='text-xl font-semibold'>Price: ${bookingProduct?.offer_price} </p>
                    <h3 className="text-sm font-semibold"> Seller Name: {bookingProduct.seller}</h3>

                    <span className="label-text">Date of Booking (dd/mm/yyyy) </span>
                    <input type="text-5xl font-semibold" value={dateTime} className="input input-bordered w-full" disabled />
                    <form onSubmit={handleBooking} className='mx-auto'>

                        <span className="label-text">Your name</span>
                        <input name='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Your Email</span>
                        <input name='email' type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Home Town</span>
                        <input name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <input type="submit" className='btn btn-primary w-full' value="Book Now" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingProduct;