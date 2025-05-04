import React from 'react';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import ReviewTable from '../../compontents/layout-components/ReviewTable';

const MyReview = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
               <ReviewTable></ReviewTable>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyReview;