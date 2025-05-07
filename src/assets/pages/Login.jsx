import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const [showPassword,setShowPassword] = useState(false);
          const navigate = useNavigate();
    const {userLogin,googleLogin,setUser} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        
        userLogin(email,password)
        .then(result=>{
        
         Swal.fire({
            icon:'success',
            title:'Login Successful!',
            text:`Welcome ${result.user.email}`,
            // timer:2000,
            showCancelButton: false
         })
         .then(()=>{
            navigate('/');
         })
        

        })
        .catch(error =>{
            Swal.fire({
                icon:'error',
                title:'Login Failed',
                text: error.message,
            })
        })
        
    }

   const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result=>{
        const loggedUser = result.user;
        setUser(loggedUser);
       
    })
    .then(()=>{
        navigate('/');
    })
    .catch(error=>{
        console.log(error.message)
    })
   }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Login Account</h2>
            <form onSubmit={handleLogin} className="space-y-4 text-left">
              
             
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
                <div className='relative'>
                                    <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
                                    <input
                                        type={showPassword ? "text":"password"}
                                        id="password"
                                        name="password"
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
                                        placeholder="Password"
                                    />
                                    <button type='button' className='btn btn-xs absolute right-4 top-10' onClick={()=> setShowPassword(!showPassword)}>
                                        {
                                            showPassword ?  <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                        }
                                        </button>
                                        
                                </div>
                
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
                >
                    Login
                </button>
            </form>
            <button onClick={handleGoogleLogin} className='btn  text-center my-5 w-full'> <span className='text-yellow-800'><FaGoogle></FaGoogle></span> Continue with google</button>
            <p className="text-center text-sm text-gray-600 mt-4">
                Don't have Any Account? <Link to='/register' className="text-purple-600 hover:underline cursor-pointer font-bold">Register</Link>
            </p>
        </div>
    </div>
    );
};

export default Login;