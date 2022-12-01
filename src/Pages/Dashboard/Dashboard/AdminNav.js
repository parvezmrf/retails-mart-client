import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from '../../../contexts/AuthProvider';



const AdminNav = () => {
    const navigate = useNavigate()
    const { user, userLogOut } = useContext(AuthContex);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                navigate('/')
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }


    return (

        <div className="navbar bg-base-100 max-md:block">
            <div className="">

                <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Back to Retails Mart</Link></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/dashboard/allbooking' >Admin Dashboard</Link ></li>
                    <li><Link  >{user?.email}</Link ></li>
                    <li><Link  >{user?.displayName}</Link ></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={handleLogOut} className="btn btn-outline btn-primary">Log out</button>
            </div>
        </div>

    );
};

export default AdminNav;