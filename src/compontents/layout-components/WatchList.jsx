import React, { useContext, useEffect, useState } from 'react';
import Background from '../../assets/background2.jpg'
import { AuthContext } from '../../provider/AuthProvider';

const WatchList = () => {

    const {user} = useContext(AuthContext);
    const [watchList,setWatchList] = useState([]);

    useEffect(()=>{
        if(user && user.email){
        fetch(`http://localhost:5000/watchList?email=${user.email}`)
        .then(res => res.json())
        .then(data => setWatchList(data));
        }
    },[user]);

    const handleDelete = id =>{
        fetch(`http://localhost:5000/watchList/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(()=>{
            setWatchList(watchList.filter(item => item._id !== id))
        })
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
                      <h1 className='text-5xl font-bold text-white  '>My Watchlist
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
                                watchList.map((item,idx)=>(

                                    <tr key={idx}>
                                    <td>{idx + 1}</td>
                                      <td><img className='w-28' src={item.photo} alt="" />
                                        </td>
                                      <td>{item.title}</td>
                                      <td>{item.genre}</td>
                                      <td>{item.year}</td>
                                      <td>{item.email}</td>
                                      <td>
                                      <button onClick={()=>handleDelete(item._id)} className='btn btn-error text-white'>Delete</button>
                                      </td>
                                        </tr> 
                                ) )
                             }
                             
                          </tbody>
                      </table>
                  </div>
              </div>
    );
};

export default WatchList;