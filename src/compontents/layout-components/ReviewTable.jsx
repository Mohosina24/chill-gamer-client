import React, { useContext, useEffect, useState } from 'react';
import Background from '../../assets/background2.jpg'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const ReviewTable = () => {
    const myReviews = useLoaderData(); 
    const {user} = useContext(AuthContext);
      const [email,setEmail] = useState('');
      const [photo,setPhoto] = useState('');
    
      useEffect(()=>{
        if(user){
          setEmail(user.email || '');
        }
      },[user])
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%'
        }}>

            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold text-white  '>My Reviews
                </h1>
                <p className='text-purple-500 text-2xl mt-5 '>Explore the games you've added to your list.</p>
            </div>
            <div className="overflow-x-auto  mx-5 ">
                <table className="table bg-white my-10 ">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th>No</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>GENRE</th>
                            <th>YEAR</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myReviews.map((review,idx) =>
                        
                            <tr key={idx} className=''>
                            <td>{idx + 1}</td>
                            <td><img className='w-20' src={review.photo} alt={review.title} /></td>
                            <td >{review.title}</td>
                            <td>{review.genre}</td>
                            <td>{review.year}</td>
                            <td>{email}</td>
                            
                            <td className=''>
                                <button className='btn btn-primary mr-2'>Edit</button>
                                <button className='btn btn-error text-white'>Delete</button>
                            </td>
                        </tr>
)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewTable;