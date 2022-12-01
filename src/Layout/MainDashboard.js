import React from 'react';
import { Outlet } from "react-router-dom";
import AdminMenu from '../Pages/Dashboard/Dashboard/AdminMenu';
import NavbarDashboard from '../Pages/Dashboard/Dashboard/NavbarDashboard';

const MainDashboard = () => {
    return (
        <div>
            <NavbarDashboard></NavbarDashboard>
            <div className='lg:flex' >
                <div className='w-1/2' >
                    <AdminMenu></AdminMenu>
                </div>
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default MainDashboard;