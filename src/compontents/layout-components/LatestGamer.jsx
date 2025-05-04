import React from 'react';
import { useLoaderData } from 'react-router-dom';

import SingleGamer from './SingleGamer';

const LatestGamer = () => {
    const latestGamers = useLoaderData() || [];
    const shortLatest = [...latestGamers].sort((a,b)=> b.year - a.year).slice(0,6);
    return (
        <div className='my-20 '>
        <h1 className='text-4xl font-bold text-purple-600  text-center my-5'>Latest Games : {shortLatest.length} </h1>

       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5  p-10 '>
         {
             shortLatest.map(gamer => <SingleGamer key={gamer._id} 
             gamer={gamer}
             ></SingleGamer>)
         }
       </div>
     </div>
    );
};

export default LatestGamer;