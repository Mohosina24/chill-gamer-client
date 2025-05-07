import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const {register,setUser,updateUserProfile,googleLogin} = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false);
    const [passwordError,setPasswordError] = useState("");
    const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const from  = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const photo = from.photo.value;
        // const createNew = {name,email,password,photo}
        
            // password validation
            const uppercase = /[A-Z]/;
            const lowercase = /[a-z]/;
    
            if(password.length < 6){
                setPasswordError("password must be at least 6 characters");
                return;
            }
            if(!uppercase.test(password)){
                setPasswordError("password must be at least one uppercase letter");
                return;
            }
            if(!lowercase.test(password)){
                setPasswordError("password must be at least one lowercase letter");
                return;
            }
            setPasswordError("");
        register(email,password)
        .then(result =>{
            const newUser = result.user;
            setUser(newUser);
            
            updateUserProfile({displayName:name,photoURL:photo})
         
             Swal.fire({
                        icon:'success',
                        title:'Registration Successful!',
                        text:`Welcome ${result.user}`,
                        showCancelButton: false
                     })
                     .then(()=>{
                        navigate('/login');
                     })
        })
        .catch(error =>{
            console.log(error.code);
        })

       

    }


    const handleGoogleRegister =()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .then(()=>{
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message)
        })
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Create an Account</h2>
            <form onSubmit={handleRegister} className="space-y-4 text-left">
                <div>
                    <label className="block mb-1 text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Name"
                    />
                </div>
             
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
                        {passwordError && <p className='text-red-600 text-sm font-semibold'>{passwordError}</p>}
                </div>
                <div>
                    <label className="block mb-1 text-gray-700" htmlFor="photo">Photo</label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Photo"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
                >
                    Register
                </button>
            </form>
            <button onClick={handleGoogleRegister} className='btn  text-center my-5 w-full'><span className='text-yellow-800'><FaGoogle></FaGoogle></span> Continue with google</button>
            <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account? <Link to='/login' className="text-purple-600 hover:underline cursor-pointer font-bold">Log In</Link >
            </p>
        </div>
    </div>
    );
};

export default Register;