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
                <Link to='/' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Home</Link>
                <Link to='/asus' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Asus</Link>
                <Link to='/blog' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Blog</Link>
            </div>

            <div >

                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}

                {user?.uid ?
                    <>

                        <Link to='/dashboard' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Dashboard</Link>
                        <Link to='/dashboard' className='btn btn-outline btn-primary normal-case text-xl mx-1' >{user.displayName}</Link>
                        <button onClick={handleLogOut} className='btn btn-outline btn-primary normal-case text-xl mx-1' >Logout</button>
                    </>
                    :
                    <>
                        <Link to='/login' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Login</Link>
                        <Link to='/register' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Register</Link>
                        <Link to='/registerseller' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Register As Seller</Link>
                    </>
                }


            </div>
        </div>

    );
};

export default Navbar;