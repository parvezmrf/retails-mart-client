import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';



const AllBookingProducts = () => {
    const { data = [] } = useQuery({
        queryKey: ['productsbookings'],
        queryFn: async () => {
            const res = await fetch('https://retails-mart-server.vercel.app/productsbookings');
            const data = res.json();
            return data
        }
    })

    // console.log(data)

    const productDelete = id => {
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
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Booking Date</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((booking, i) => <tr key={booking._id} >
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.product.slice(0, 20) + '...'}</td>
                                <td>{booking.dateTime}</td>
                                <td>{booking.price}</td>
                                <td>{booking.location}</td>
                                <td>Pending</td>
                                <td> <button onClick={() => productDelete(booking._id)} className='btn btn-ghost' >X</button> </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookingProducts;