import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Login Account</h2>
            <form  className="space-y-4 text-left">
              
             
                <div>
                    <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Password"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
                >
                    Login
                </button>
            </form>
            <button className='btn  text-center my-5 w-full'>Continue with google</button>
            <p className="text-center text-sm text-gray-600 mt-4">
                Don't have Any Account? <Link to='/register' className="text-purple-600 hover:underline cursor-pointer font-bold">Register</Link>
            </p>
        </div>
    </div>
    );
};

export default Login;