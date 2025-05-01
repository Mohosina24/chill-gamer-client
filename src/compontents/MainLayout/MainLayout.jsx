import React from 'react';
import Home from '../Home';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </nav>
        </div>
    );
};

export default MainLayout;