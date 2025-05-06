import React from 'react';
import { Link } from 'react-router-dom';

const SingleGamer = ({gamer}) => {
    const {_id,photo,title,genre,rating,year} = gamer;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto ">
        <figure>
          <img
          className=' h-[200px] w-full'
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Genre: {genre}</p>
          <p className="font-bold">rating: {rating}</p>
          <p className="font-bold">Published Date: {year}</p>
          <div className="card-actions justify-end">
            <Link to={`/review/${_id}`} className="btn bg-purple-700 text-white hover:bg-purple-700 w-full">Explore Details</Link>
          </div>
        </div>
      </div>
    );
};

export default SingleGamer;