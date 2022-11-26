import React from 'react';
import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
            <button className='btn my-1 w-48'> <Link to='/dashboard' >Home</Link ></button> <br />
            <button className='btn my-1 w-48'> <Link to='/dashboard/allbooking' >All Booking</Link ></button><br />
            <button className='btn my-1 w-48'> <Link to='/dashboard/allbuyer' >All Buyer</Link ></button><br />

        </div>
    );
};

export default AdminMenu;