import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { AuthContex } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';



const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContex);

    const post_date = new Date().toLocaleString().slice(0, 10);


    const [usrrole, SetUsrrole] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                SetUsrrole(data)
            })
    }, [user?.email])

    console.log(usrrole.role)


    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }


    // AAdd proddddd



    const addProduct = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        const offer_price = form.offer_price.value
        const org_price = form.offer_price.value
        const seller = form.seller.value
        const email = form.email.value
        const location = form.location.value
        const img = form.img.value
        const core = form.core.value
        const ram = form.ram.value
        const os = form.os.value
        const category = form.category.value




        const addProduct = {
            title,
            offer_price,
            org_price,
            seller,
            email,
            location,
            post_date,
            core,
            ram,
            img,
            os,
            category,


        }
        console.log(addProduct)


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Booking Confirmed!!', {
                        duration: 2000
                    })


                }
            })


        console.log(addProduct)
    }



    // add prod












    return (

        <div className="navbar bg-base-100 lg:flex lg:justify-between my-5">
            <div >
                <img className='w-48' src={logo} alt="" />
            </div>

            <div>
                <Link to='/' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Home</Link>
                <Link to='/mybooking' className='btn btn-outline btn-primary normal-case text-xl mx-1'>My booking</Link>
                <Link to='/blog' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Blog</Link>
            </div>

            <div >

                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}

                {user?.uid ?
                    <>

                        {
                            usrrole?.role === 'admin' ? <Link to='/dashboard' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Admin Dashboard</Link> :


                                <>

                                    {
                                        usrrole?.role === 'seller' ? <label htmlFor="add-modal" className="btn btn-outline btn-primary normal-case text-xl mx-1">Add Product</label> : ''
                                    }

                                </>
                        }


                        <Link className='btn btn-outline btn-primary normal-case text-xl mx-1' >{user.displayName}</Link>
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

            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={addProduct} className='mx-auto'>

                        <span className="label-text">Product Picture Link</span>
                        <input name='img' type="text" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Product name</span>
                        <input name='title' type="text" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Product Brand</span><br />
                        <select name='category' className="select select-bordered w-full max-w-xs">

                            <option >Dell</option>
                            <option>Lenovo</option>
                            <option>Asus</option>
                        </select><br />

                        <span className="label-text">Processore</span>
                        <input name='core' type="text" className="input input-bordered input-primary w-full mb-3" />
                        <span className="label-text">Ram</span>
                        <input name='ram' type="text" className="input input-bordered input-primary w-full mb-3" />
                        <span className="label-text">Os supported</span>
                        <input name='os' type="text" className="input input-bordered input-primary w-full mb-3" />


                        <span className="label-text">Original Price</span>
                        <input name='org_price' type="text" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">New Price</span>
                        <input name='offer_price' type="text" className="input input-bordered input-primary w-full mb-3" />

                        <span className="label-text">Used year</span>
                        <input name='used_time' type="text" className="input input-bordered input-primary w-full mb-3" />
                        <span className="label-text">Your Location</span>
                        <input name='location' type="text" className="input input-bordered input-primary w-full mb-3" />




                        <span className="label-text">Your name</span>
                        <input name='seller' type="text" defaultValue={user?.displayName} className="input input-bordered input-primary w-full mb-3" disabled />

                        <span className="label-text">Your name</span>
                        <input name='email' type="text" defaultValue={user?.email} className="input input-bordered input-primary w-full mb-3" disabled />






                        <input type="submit" className='btn btn-primary w-full' value="Add Product" />
                    </form>















                </div>
            </div>



        </div>

    );
};

export default Navbar;