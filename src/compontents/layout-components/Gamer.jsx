import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleGamer from './SingleGamer';

const Gamer = () => {
    const loaderGamers = useLoaderData() || [];

    const sortedGamers = [...loaderGamers].sort((a,b) => b.rating - a.rating);
   
    return (
        <div className='my-20 '>
           <h1 className='text-4xl font-bold text-purple-600  text-center my-5'>Highest Rated Game : {loaderGamers.length} </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-purple-300 p-10 '>
            {
                sortedGamers.map(gamer => <SingleGamer key={gamer._id} 
                gamer={gamer}
                ></SingleGamer>)
            }
          </div>
        </div>
    );
};

export default Gamer;