import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='text' {...register("email")} className="input input-bordered w-full " />
                    </div>


                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full " />
                    </div>
                    <label className="label"> <span className="label-text">Forger Password?</span></label>

                    <input className='btn btn-primary w-full' type="submit" value='Login' />
                    <p>New to Retail Mart? <Link className='text-primary' to='/register'> Create New Account </Link></p>
                    <div className="divider">OR</div>
                    <input className='btn btn-outline btn-primary w-full' type="submit" value='Login With Google' />
                </form>
            </div>
        </div>
    );
};

export default Login;