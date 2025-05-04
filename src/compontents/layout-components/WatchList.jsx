import React from 'react';
import Background from '../../assets/background2.jpg'
const WatchList = () => {
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
                             
                             
                                <tr>
                                <td>No</td>
                                  <td>IMAGE</td>
                                  <td>TITLE</td>
                                  <td>GENRE</td>
                                  <td>YEAR</td>
                                  <td>EMAIL</td>
                                  <td>
                                  <button className='btn btn-error text-white'>Delete</button>
                                  </td>
                                    </tr> 
                          </tbody>
                      </table>
                  </div>
              </div>
    );
};

export default WatchList;