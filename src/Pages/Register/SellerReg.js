import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';



const SellerReg = () => {
    useTitle('Seller Registration - Retails Mart')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContex);
    const navigate = useNavigate()

    const handleRegister = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.phone, data.email, data.shop, data.role)
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.error(error));



        const saveUser = (name, phone, email, shop, role) => {
            const user = { name, phone, email, shop, role };
            fetch('https://retails-mart-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    navigate('/')
                })
        }



    }
    return (
        <div className=' flex justify-center items-center'>
            <div className='w-2/5'>
                <h2 className='text-3xl font-bold text-center'>Register and sell your products</h2>
                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                        {errors.name && <p role='alert' className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type='text' {...register("phone", { required: "Phone number is required" })} className="input input-bordered w-full " />
                        {errors.phone && <p role='alert' className='text-red-600'>{errors.phone?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full " />
                        {errors.email && <p role='alert' className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Shop Name</span></label>
                        <input type='text' {...register("shop", { required: "Shop is required" })} className="input input-bordered w-full " />
                        {errors.shop && <p role='alert' className='text-red-600'>{errors.shop?.message}</p>}
                    </div>


                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password should be 6 charecter or longer' }
                        })} className="input input-bordered w-full " />
                        {errors.password && <p role='alert' className='text-red-600'>{errors.password?.message}</p>}

                    </div>

                    <div className="form-control w-full hidden">
                        <label className="label"> <span className="label-text">role</span></label>
                        <input type='text' {...register("role")} defaultValue='seller' className="input input-bordered w-full " />

                    </div>


                    <label className="label"> <span className="label-text">Forger Password?</span></label>

                    <input className='btn btn-primary w-full' type="submit" value='Register as seller' />
                    <p>Already have an account? <Link className='text-primary' to='/login'> Login Now </Link></p>

                </form>
            </div>
        </div>
    );
};

export default SellerReg;