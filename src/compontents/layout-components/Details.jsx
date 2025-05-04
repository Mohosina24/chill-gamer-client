import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Details = () => {
    const game = useLoaderData();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
      const [email,setEmail] = useState('');
      const [name,setName] = useState('');
    
      useEffect(()=>{
        if(user){
          setEmail(user.email || '');
          setName(user.displayName || '');
        }
      },[user])

      const handleAddToWatchList = async()=>{
        const watchItem = {
            title:game.title,
            genre: game.genre,
            year: game.year,
            photo: game.photo,
            email: user.email,
        };
        const response = await fetch('http://localhost:5000/watchList',{
           method:'POST',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(watchItem)
        })
        if(response.ok){
            alert('Added to WatchList');
            navigate('/watchList');
        }
      }
    return (
        <div className="card card-side min-h-screen p-5 w-10/12 mx-auto my-20 bg-base-100 shadow-xl">
        <figure>
          <img className='w-[350px]'
            src={game.photo}
            alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className=" text-4xl font-bold ">Title: {game.title}</h2>
          <p className='text-2xl text-gray-600 '>Description:{game.description}</p>
          
          <p className='text-xl font-bold '>Rating: {game.rating}</p>
          <p className='text-xl font-bold'>Genre: {game.genre}</p>
          
           <p className='text-xl font-bold'>Published Year: {game.year}</p>
          <div className="card-actions flex justify-between rounded-xl bg-gray-100 p-5 items-center">
            <div>
                <p className='text-2xl'>Reviewer</p>
                <h1 className='text-xl '>{name}</h1>
                <p>{email}</p>
            </div>
            <button onClick={handleAddToWatchList}  className="btn btn-primary">Watch List </button>
          </div>
        </div>
      </div>
    );
};

export default Details;