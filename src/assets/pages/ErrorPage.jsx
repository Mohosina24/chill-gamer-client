import React from 'react';
import Error from '../error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
    <div className=''>
        <div className='flex flex-col items-center my-20'>
            <img className='w-1/2 mx-auto mb-20 ' src={Error} alt="" />

            <Link to="/" className='btn w-32 flex items-center  bg-purple-800 text-white hover:bg-purple-800'>Go to Home</Link>
        </div>
       
        
        </div>
    );
};

export default ErrorPage;