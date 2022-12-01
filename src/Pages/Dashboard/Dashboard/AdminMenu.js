import React from 'react';
import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
            <Link to='/dashboard' > <button className='btn btn-outline btn-primary my-1 w-48'> Home</button></Link > <br />
            <Link to='/dashboard/allbooking' ><button className='btn btn-outline btn-primary my-1 w-48'> All Booking</button></Link ><br />

            <Link to='/dashboard/sellers' > <button className='btn btn-outline btn-primary my-1 w-48'>Seller Only</button></Link ><br />
            <Link to='/dashboard/buyer' > <button className='btn btn-outline btn-primary my-1 w-48'>Buyer Only</button></Link ><br />
            <Link to='/dashboard/allusers' > <button className='btn btn-outline btn-primary my-1 w-48'> All User</button></Link ><br />
            <Link to='/dashboard/reported' > <button className='btn  btn-warning my-1 w-48'> Reported Items </button></Link ><br />

        </div>
    );
};

export default AdminMenu;