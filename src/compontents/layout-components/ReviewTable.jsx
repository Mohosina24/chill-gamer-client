import React, { useContext, useEffect, useState } from 'react';
import Background from '../../assets/background2.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewTable = () => {
    const myReviews = useLoaderData(); 
    const {user} = useContext(AuthContext);
      const [email,setEmail] = useState('');
      const [reviews,setReviews] = useState(myReviews);
    
      useEffect(()=>{
        if(user){
          setEmail(user.email || '');
        }
      },[user])

    //   delete 
    const handleDelete = id =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/gamers/${id}`,{
                        method:'DELETE',
                    })
                    .then(res => res.json())
                    .then(()=>{
                        setReviews(reviews.filter(review => review._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    })
                 
                }
              });
            }
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
                        reviews.map((review,idx) =>
                        
                            <tr key={idx} className=''>
                            <td>{idx + 1}</td>
                            <td><img className='w-20' src={review.photo} alt={review.title} /></td>
                            <td >{review.title}</td>
                            <td>{review.genre}</td>
                            <td>{review.year}</td>
                            <td>{email}</td>
                            
                            <td className=''>
                                <Link to={`/updateGame/${review._id}`} className='btn btn-primary mr-2'>Edit</Link>
                                <button onClick={()=>handleDelete(review._id)} className='btn btn-error text-white'>Delete</button>
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