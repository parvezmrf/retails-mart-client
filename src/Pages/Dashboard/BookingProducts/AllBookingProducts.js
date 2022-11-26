import React from 'react';
import { useQuery } from '@tanstack/react-query'


const AllBookingProducts = () => {
    const { data = [] } = useQuery({
        queryKey: ['productsbookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productsbookings');
            const data = res.json();
            return data
        }
    })

    console.log(data)

    const reviewDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`http://localhost:5000/productsbookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete operation succed!')

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
                                <td> <button onClick={() => reviewDelete(booking._id)} className='btn btn-ghost' >X</button> </td>
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