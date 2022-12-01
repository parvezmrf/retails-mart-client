import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';

const AllUsers = () => {

    const userData = useLoaderData()


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
                        window.location.reload()

                    }
                })
        }
    }




    const handleMakeAdmin = id => {
        fetch(`https://retails-mart-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast('Make admin successful')

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
                        <th>Info</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.map((usr, idx) => <UserCard
                            key={idx}
                            usr={usr}
                            userDelete={userDelete}
                            handleMakeAdmin={handleMakeAdmin}

                        ></UserCard>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default AllUsers;