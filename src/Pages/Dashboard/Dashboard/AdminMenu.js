import React from 'react';
import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
            <Link to='/dashboard' > <button className='btn btn-outline btn-primary my-1 w-48'> Home</button></Link > <br />
            <Link to='/dashboard/allbooking' ><button className='btn btn-outline btn-primary my-1 w-48'> All Booking</button></Link ><br />

            <Link to='/dashboard/allbuyer' > <button className='btn btn-outline btn-primary my-1 w-48'> All Buyer</button><br /></Link >

        </div>
    );
};

export default AdminMenu;