import React from 'react';

const Latest = ({gamer}) => {
    const {photo,title,description,rating,year} = gamer;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto ">
        <figure>
          <img
          className=' h-[200px] py-3'
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Description: {description}</p>
          <p className="font-bold">rating: {rating}</p>
          <p className="font-bold">Published Date: {year}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-purple-700 text-white hover:bg-purple-700 w-full">Explore Details</button>
          </div>
        </div>
      </div>
    );
};

export default Latest;