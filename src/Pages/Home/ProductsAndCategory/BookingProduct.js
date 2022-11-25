import React from 'react';

const BookingProduct = ({ bookingProduct }) => {

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    const today = formatDate(new Date())
    console.log(today);

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  max-w-xl">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-sm font-bold">{bookingProduct.title}</h3>
                    <p className='text-xl font-semibold'>Price: ${bookingProduct?.offer_price} </p>
                    <h3 className="text-sm font-semibold"> Seller Name: {bookingProduct.seller}</h3>

                    <span className="label-text">Date of Booking (dd/mm/yyyy) </span>
                    <input type="text-5xl font-semibold" value={today} className="input input-bordered w-full" disabled />
                    <form className='mx-auto'>

                        <span className="label-text">Your name</span>
                        <input type="text" value='' placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Your Email</span>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Home Town</span>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full mb-3" />

                        <input type="submit" className='btn btn-primary w-full' value="Book Now" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingProduct;