import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';

const AllUsers = () => {

    const userData = useLoaderData()

    console.log(userData)


    const userDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`http://localhost:5000/users/${id}`, {
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




    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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