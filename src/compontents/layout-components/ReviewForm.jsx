import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const ReviewForm = () => {

  const {user} = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');

  useEffect(()=>{
    if(user){
      setEmail(user.email || '');
      setName(user.displayName || '');
    }
  },[user])


    const handleReviewSubmit = e =>{
       e.preventDefault();
       const form = e.target;
       const photo = form.photo.value;
       const title = form.title.value;
       const description = form.description.value;
       const rating = form.rating.value;
       const year = form.year.value;
       const genre = form.genre.value;
       const email = form.email.value;
       const name = form.name.value;
       const reviews ={photo,title,description,rating,year,genre,email,name}
       console.log(reviews)
       fetch('http://localhost:5000/gamers',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(reviews)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title:'Success!',
            text:'Game review added successfully!',
             icon:'success',
             confirmButtonText:'OK'
          });
          form.reset();
        }
       })
    }
  return (
    <div className="max-w-3xl mx-auto my-20 p-8 rounded-2xl shadow-xl bg-purple-100">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Add New Review</h2>
      
      <form onSubmit={handleReviewSubmit} className="space-y-4">
       
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Game Cover Image (URL)</label>
          <input
            name='photo'  type="url"
            placeholder="Enter game cover image URL"
            className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

     
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Game Title / Name</label>
          <input
            name='title'  type="text"
            placeholder="Enter game title"
            className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Review Description</label>
          <textarea
          name='description'
            placeholder="Write your review here..."
            className="w-full textarea textarea-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

       
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Rating (1-5)</label>
          <input
            name='rating'  type="number"
            min="1"
            max="5"
            step="0.1"
            placeholder="Rating"
            className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

       
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Publishing Year</label>
          <input
            name='year'  type="number"
            placeholder="Enter the year of publishing"
            className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

    
        <div>
          <label className="block text-purple-700 font-semibold mb-1">Genre</label>
          <select name='genre' className="w-full select select-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option disabled selected>Select Genre</option>
            <option>Action</option>
            <option>RPG</option>
            <option>Adventure</option>
            <option>Strategy</option>
            <option>Sports</option>
          </select>
        </div>

    
        <div>
          <label className="block text-purple-700 font-semibold mb-1">User Email</label>
          <input
            name='email'  type="email"
            value={email}
            readOnly
            className="w-full input input-bordered bg-gray-100 text-gray-700 border-purple-300"
          />
        </div>

        <div>
          <label className="block text-purple-700 font-semibold mb-1">User Name</label>
          <input
            name='name'  type="text"
            value={name}
            readOnly
            className="w-full input input-bordered bg-gray-100 text-gray-700 border-purple-300"
          />
        </div>

        
        <div className="text-center mt-6">
          <button
            name=''  type="submit"
            className="btn bg-purple-600 w-full text-white hover:bg-purple-700 px-6"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

