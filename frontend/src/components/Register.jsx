import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

function Register() {
    const [message, setMessage] = useState("")
    const { registerUser, signInWithGoogle } = useAuth()
    console.log(registerUser)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // register user

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await registerUser(data.email, data.password);
            alert("User registered sucessfully!")
        } catch (error) {
            setMessage("please provide a valid email and password");
            console.error(error)
        }
    }

    console.log(watch("example")); // watch input value by passing the name of it


    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            alert("login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in Failed")
            console.error(error)

        }
    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })}
                            type="email" name="email" id="email" placeholder='Email Address'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">password</label>
                        <input {...register("password", { required: true })}
                            type="password" name="password" id="password" placeholder='password'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>

                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }



                    <div >
                        <button type="submit" className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none' >Register</button>
                    </div>
                </form>
                <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please <Link to="/login" className="text-blue-500 hover:text-blue-700"> Login</Link></p>

                {/* google sign in method */}
                <div className="mt-4">
                    <button onClick={handleGoogleSignIn}
                        className="w-full flex flex-wrap gap-1 items-center justify-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                    >
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                </div>
                <p className="mt-5 text-center text-gray-500 text-xs">
                    &copy;2025 Book Store. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Register
