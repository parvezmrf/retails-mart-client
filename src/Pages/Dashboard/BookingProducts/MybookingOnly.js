import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../contexts/AuthProvider';
import MybookingOnlyCard from './MybookingOnlyCard';
import toast from 'react-hot-toast';


const MybookingOnly = () => {

    const { user } = useContext(AuthContex)
    const [booking, SetBooking] = useState([])

    console.log(user?.email)
    console.log(booking)


    useEffect(() => {
        fetch(`https://retails-mart-server.vercel.app/mybooking?email=${user?.email}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                SetBooking(data)
            })
    }, [user?.email])

    const bookDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`https://retails-mart-server.vercel.app/productsbookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted')

                    }
                })
        }
    }





    return (


        <div className='grid grid-cols-2 gap-4 p-10' >
            {booking?.length ? <> {
                booking.map(book => <MybookingOnlyCard
                    key={book._id}
                    book={book}
                    bookDelete={bookDelete}
                ></MybookingOnlyCard>)
            }</> : <> <p className='text-center text-3xl font-semibold'>No Product Added by you</p></>
            }
        </div>

    );
};

export default MybookingOnly;