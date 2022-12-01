import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../../contexts/AuthProvider';

const BookingReport = ({ bookingRepo, setBookingRepo }) => {
    // console.log(bookingRepo)

    const { user } = useContext(AuthContex)



    const handleReport = event => {
        event.preventDefault();
        const form = event.target;
        const product = bookingRepo.title
        const name = bookingRepo.seller
        const location = bookingRepo.location
        const price = bookingRepo.offer_price
        const img = bookingRepo.img
        const reportmsg = form.reportmsg.value
        const reporter = user.displayName



        const reportFromModal = {
            product,
            price,
            name,
            location,
            img,
            reportmsg,
            reporter
        }
        // console.log(reportFromModal)

        fetch('https://retails-mart-server.vercel.app/reportsbookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportFromModal)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    setBookingRepo(null)
                    toast.success('Product Reported!!', {
                        duration: 2000
                    })


                }
            })


        // console.log(reportFromModal)


    }


    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <span className='text-red-600' >You are reporting to</span>


                    <h3 className="text-lg font-bold">{bookingRepo?.title}</h3>
                    <h4 className="text-md font-semibold"> Seller Name: {bookingRepo?.seller}</h4>
                    <h4 className="text-md font-semibold"> Location: {bookingRepo?.location}</h4>
                    <h4 className="text-md font-semibold"> Price: {bookingRepo?.offer_price}</h4>
                    <form onSubmit={handleReport} className='mx-auto'>
                        <p className="py-2">
                            <label className="label">
                                <span className="label-text">Cause of report</span>
                            </label>



                            <textarea name='reportmsg' className="textarea textarea-error w-full" placeholder="Write details" required></textarea>


                            <input type="submit" className='btn btn-primary w-full' value="Send Report to admin" />


                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingReport;