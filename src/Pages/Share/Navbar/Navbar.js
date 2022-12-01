import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { AuthContex } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import logout from '../../../assets/logout.jpg'



const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContex);

    const post_date = new Date().toLocaleString().slice(0, 10);

    const [close, SetClose] = useState(true)


    const [usrrole, SetUsrrole] = useState([])


    useEffect(() => {
        fetch(`https://retails-mart-server.vercel.app/user?email=${user?.email}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                SetUsrrole(data)
            })
    }, [user?.email])

    // console.log(usrrole.role)


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
        const org_price = form.org_price.value
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
        // console.log(addProduct)


        fetch('https://retails-mart-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    SetClose(null)

                    toast.success('Product Added!!', {
                        duration: 3000
                    })


                }
            })


        // console.log(addProduct)
    }



    // add prod







    return (

        <div className="navbar bg-base-100 lg:flex lg:justify-between my-5 max-md:block">
            <div >
                <img className='w-48' src={logo} alt="" />
            </div>

            <div className='max-md:block' >
                <Link to='/' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Home</Link>

                {user?.uid && <Link to='/mybooking' className='btn btn-outline btn-primary normal-case text-xl mx-1'>My booking</Link>}

                <Link to='/blog' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Blog</Link>

                {user?.uid ? '' :
                    <Link to='/blog' className='btn btn-outline btn-primary normal-case text-xl mx-1'>About Us</Link>}
            </div>

            <div className='max-md:block' >

                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}

                {user?.uid ?
                    <>

                        {
                            usrrole?.role === 'admin' ? <><Link to='/dashboard' className='btn btn-outline btn-primary normal-case text-xl mx-1'>Admin Dashboard</Link> <label htmlFor="add-modal" className="btn btn-outline btn-primary normal-case text-xl mx-1">Add Product</label>

                                <Link to='/myproduct' className='btn btn-outline btn-primary normal-case text-xl mx-1'>My Product</Link> </>
                                :


                                <>

                                    {
                                        usrrole?.role === 'seller' ? <> <label htmlFor="add-modal" className="btn btn-outline btn-primary normal-case text-xl mx-1">Add Product</label>
                                            <Link to='/myproduct' className='btn btn-outline btn-primary normal-case text-xl mx-1'>My Product</Link> </> : ''
                                    }

                                </>
                        }


                        <Link className=' badge badge-info  mx-1' >{user.displayName}</Link>
                        <button onClick={handleLogOut} className='btn btn-ghost normal-case text-xl mx-1' >

                            <div className="avatar">
                                <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={logout} alt="" />
                                </div>
                            </div>


                        </button>
                    </>
                    :
                    <>
                        <Link to='/login' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Login</Link>
                        <Link to='/register' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Register</Link>
                        <Link to='/registerseller' className='btn btn-outline btn-primary normal-case text-xl mx-1' >Register As Seller</Link>
                    </>

                }


            </div>


            {close ? <>

                <input type="checkbox" id="add-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                        <form onSubmit={addProduct} className='mx-auto'>

                            <span className="label-text">Product Picture Link</span> <span className='text-red-500' >*</span>
                            <input name='img' type="text" className="input input-bordered input-primary w-full mb-3" required />

                            <span className="label-text">Product name</span> <span className='text-red-500' >*</span>
                            <input name='title' type="text" className="input input-bordered input-primary w-full mb-3" required />

                            <span className="label-text">Product Brand</span> <span className='text-red-500' >*</span> <br />
                            <select name='category' className="select select-bordered w-full max-w-xs">

                                <option >Dell</option>
                                <option>Lenovo</option>
                                <option>Asus</option>
                            </select><br />

                            <span className="label-text">Processore</span> <span className='text-red-500' >*</span>
                            <input name='core' type="text" className="input input-bordered input-primary w-full mb-3" required />
                            <span className="label-text">Ram</span> <span className='text-red-500' >*</span>
                            <input name='ram' type="text" className="input input-bordered input-primary w-full mb-3" required />
                            <span className="label-text">Os supported</span> <span className='text-red-500' >*</span>
                            <input name='os' type="text" className="input input-bordered input-primary w-full mb-3" required />


                            <span className="label-text">Original Price</span> <span className='text-red-500' >*</span>
                            <input name='org_price' type="text" className="input input-bordered input-primary w-full mb-3" required />

                            <span className="label-text">New Price</span> <span className='text-red-500' >*</span>
                            <input name='offer_price' type="text" className="input input-bordered input-primary w-full mb-3" required />

                            <span className="label-text">Used year</span> <span className='text-red-500' >*</span>
                            <input name='used_time' type="text" className="input input-bordered input-primary w-full mb-3" required />
                            <span className="label-text">Your Location</span> <span className='text-red-500' >*</span>
                            <input name='location' type="text" className="input input-bordered input-primary w-full mb-3" required />




                            <span className="label-text">Your name</span> <span className='text-red-500' >*</span>
                            <input name='seller' type="text" defaultValue={user?.displayName} className="input input-bordered input-primary w-full mb-3" required disabled />

                            <span className="label-text">Your name</span> <span className='text-red-500' >*</span>
                            <input name='email' type="text" defaultValue={user?.email} className="input input-bordered input-primary w-full mb-3" required disabled />

                            <input type="submit" className='btn btn-primary w-full' value="Add Product" />
                        </form>


                    </div>
                </div>

            </>
                :
                ''

            }











        </div>

    );
};

export default Navbar;