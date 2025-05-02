import React from 'react';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import ReviewForm from '../../compontents/layout-components/ReviewForm';

const AddReviews = () => {
    return (
        <div>
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