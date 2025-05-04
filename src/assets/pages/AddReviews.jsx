import React from 'react';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import ReviewForm from '../../compontents/layout-components/ReviewForm';
import Background from '../background1.jpg'

const AddReviews = () => {
    return (
        <div style={{
                    backgroundImage:`url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight:'100vh',
                    width:'100%'
                }}>
          <nav>
            <Navbar></Navbar>
          </nav>
          <section>
            <ReviewForm></ReviewForm>
          </section>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default AddReviews;