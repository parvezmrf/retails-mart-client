import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';

const BuyerList = () => {
    const userData = useLoaderData()
    // console.log(userData)
    return (
        <div className="overflow-x-auto w-full">
            Total {userData.length}

            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.map((usr, idx) => <UserCard
                            key={idx}
                            usr={usr}

                        ></UserCard>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default BuyerList;