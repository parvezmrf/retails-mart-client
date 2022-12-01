import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContex);
    const navigate = useNavigate()
    useTitle('Register - Retails Mart')


    const refreshPage = () => {
        window.location.reload(false);
    }

    const handleRegister = data => {
        // console.log(data)
        // console.log(data.name, data.email, data.role)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)

                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.error(error));
    }


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
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




    return (
        <div className='flex justify-center items-center'>
            <div className='w-2/5'>
                <h2 className='text-3xl font-bold text-center'>Register and buy any products</h2>

                <form onSubmit={handleSubmit(handleRegister)}>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                        {errors.name && <p role='alert' className='text-red-600'>{errors.name?.message}</p>}
                    </div>


                    <div className="form-control w-full hidden">
                        <label className="label"> <span className="label-text">role</span></label>
                        <input type='text' {...register("role")} defaultValue='buyer' className="input input-bordered w-full " />

                    </div>



                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full " />
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

                    <label className="label"> <span className="label-text">Forger Password?</span></label>

                    <input className='btn btn-primary w-full' type="submit" value='Register' />
                    <p>Already have an account? <Link className='text-primary' to='/login'> Login Now </Link></p>
                    <div className="divider">OR</div>
                    <input className='btn btn-outline btn-primary w-full' type="submit" value='Login With Google' />
                </form>
            </div>
        </div>
    );
};

export default Register;