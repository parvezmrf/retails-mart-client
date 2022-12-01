import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login - Retails Mart')

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContex);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        // console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='text' {...register("email", { required: "Email is required" })} className="input input-bordered w-full " />
                        {errors.email && <p role='alert' className='text-red-600'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password should be 6 charecter or longer' }
                        })} className="input input-bordered w-full " />
                        {errors.password && <p role='alert' className='text-red-600'>{errors.password?.message}</p>}

                    </div>
                    {loginError && <p>{loginError}</p>}
                    <label className="label"> <span className="label-text">Forger Password?</span></label>

                    <input className='btn btn-primary w-full' type="submit" value='Login' />
                </form>
                <p>New to Retail Mart? <Link className='text-primary' to='/register'> Create New Account </Link></p>
                <div className="divider">OR</div>
                <input className='btn btn-outline btn-primary w-full' type="submit" value='Login With Google' />
            </div>
        </div>
    );
};

export default Login;