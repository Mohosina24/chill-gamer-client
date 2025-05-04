import React from 'react';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import Details from '../../compontents/layout-components/Details';
import Background from '../background1.jpg';


const ReviewDetails = () => {

    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%'
        }}>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main >
                <Details></Details>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ReviewDetails;