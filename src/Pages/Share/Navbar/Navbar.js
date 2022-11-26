import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { AuthContex } from '../../../contexts/AuthProvider';


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContex);
    console.log(user)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (

        <div className="navbar bg-base-100 lg:flex lg:justify-between my-5">
            <div >
                <img className='w-48' src={logo} alt="" />
            </div>

            <div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>Home</Link>
                <Link to='/asus' className='btn btn-ghost normal-case text-xl'>Asus</Link>
                <Link className='btn btn-ghost normal-case text-xl'>Middle</Link>
            </div>

            <div >

                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}

                {user?.uid ?
                    <>

                        <Link to='/dashboard' className='btn btn-ghost normal-case text-xl' >Dashboard</Link>
                        <Link to='/dashboard' className='btn btn-ghost normal-case text-xl' >{user.displayName}</Link>
                        <button onClick={handleLogOut} className='btn btn-ghost normal-case text-xl' >Logout</button>
                    </>
                    :
                    <>
                        <Link to='/login' className='btn btn-ghost normal-case text-xl' >Login</Link>
                        <Link to='/register' className='btn btn-ghost normal-case text-xl' >Register</Link>
                    </>
                }


            </div>
        </div>

    );
};

export default Navbar;