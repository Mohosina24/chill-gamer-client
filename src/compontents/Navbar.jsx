import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/slider-img/user.jpg';

const Navbar = () => {
    const links = <>
      <li><Link to="/">Home</Link></li>
     
     <li><Link to="/allReviews">All Reviews</Link></li>
     <li><Link to="/addReview">Add Review</Link></li>
     <li><Link to="/myReviews">My Reviews</Link></li>
     <li><Link to="/watchList">Game WatchList</Link></li>
     
    </>
    return (
        <div className="navbar bg-base-100 p-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-purple-800">Chill Gamer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-lg text-purple-600">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <img src={userIcon} alt="" className='w-12'/>
    <Link className="btn bg-purple-700 text-white" to="/register">Register</Link>
    <Link className="btn bg-purple-700 text-white" to="/login">Login</Link>
    
  </div>
</div>
    );
};

export default Navbar;