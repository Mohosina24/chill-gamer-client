import React from 'react';
import SingleGamer from './SingleGamer';
import { useLoaderData } from 'react-router-dom';

const OldestGame = () => {
    const oldestGamers = useLoaderData() || [];
    const shortOld = [...oldestGamers]
    .filter(old => old.year && old.year <= 2020)
    .sort((a,b)=>a.year - b.year).slice(0,3);

    return (
        <div className='my-20 '>
        <h1 className='text-4xl font-bold text-purple-600  text-center my-5'>Oldest Games : {shortOld.length} </h1>

       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-purple-300 p-10 '>
         {
             shortOld.map(gamer => <SingleGamer key={gamer._id} 
             gamer={gamer}
             ></SingleGamer>)
         }
       </div>
       </div>
    );
};

export default OldestGame;