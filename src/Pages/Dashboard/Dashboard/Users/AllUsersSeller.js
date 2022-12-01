import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import UserCardSeller from './UserCardSeller';

const AllUsersSeller = () => {
    const userData = useLoaderData()
    // console.log(userData)





    const userDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`https://retails-mart-server.vercel.app/users/${id}`, {
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




    const handleMakeVerify = id => {
        fetch(`https://retails-mart-server.vercel.app/users/verify/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast('Seller Verified successful')
                    window.location.reload()

                }
            })

    }








    return (
        <div className="overflow-x-auto w-full">
            Total {userData.length}
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Shop Details</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.map((usr, idx) => <UserCardSeller
                            key={idx}
                            usr={usr}
                            userDelete={userDelete}
                            handleMakeVerify={handleMakeVerify}

                        ></UserCardSeller>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default AllUsersSeller;