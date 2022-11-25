import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:flex lg:justify-between my-5">
            <div >
                <img className='w-48' src={logo} alt="" />
            </div>

            <div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>Home</Link>
                <Link className='btn btn-ghost normal-case text-xl'>Middle</Link>
                <Link className='btn btn-ghost normal-case text-xl'>Middle</Link>
            </div>

            <div >

                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <Link className='btn btn-ghost normal-case text-xl' >Dashboard</Link>
                <Link to='/login' className='btn btn-ghost normal-case text-xl' >Login</Link>
                <Link to='/register' className='btn btn-ghost normal-case text-xl' >Register</Link>
                <Link className='btn btn-ghost normal-case text-xl' >Logout</Link>


            </div>
        </div>

    );
};

export default Navbar;