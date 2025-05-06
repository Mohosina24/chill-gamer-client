
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import Background from '../background1.jpg'

const AllReview = () => {
    const loadReviews = useLoaderData();
  



    return (
        <>
        <div style={{
                            backgroundImage:`url(${Background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight:'100vh',
                            width:'100%'
                        }}>
        <nav className=''>
            <Navbar></Navbar>
        </nav>
        <div className='my-20 text-center '>
            <h1 className='text-4xl font-bold text-purple-600  text-center my-5'>All Game Reviews|
            <p className='text-xl my-10 text-blue-800'>
                Dive into our collection of user-submitted game reviews. Explore now!
            </p>
                <div>
                    <select className="select mr-5 w-32 bg-purple-600 text-white max-w-xs">
                        <option disabled selected>sortBy</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                    <select className="select  w-40 bg-blue-900 text-white  max-w-xs">
                        <option disabled selected>Filter by Genra</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                </div>
            </h1>
            


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto '>
                {
             loadReviews.map(gamer =>  <div className="card text-left card-compact bg-base-100 w-96 shadow-xl mx-auto ">
                <figure className=' '>
                  <img
                  className=' h-[250px] w-full  '
                    src={gamer.photo}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{gamer.title}</h2>
                  <p>Description: {gamer.description}</p>
                  <p className="font-bold">rating: {gamer.rating}</p>
                  <p className="font-bold">Published Date: {gamer.year}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/review/${gamer._id}`} className="btn bg-purple-700 text-white hover:bg-blue-800 w-full">Explore Details</Link>
                  </div>
                </div>
              </div>)
         }
            </div>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
        </>
    );
};

export default AllReview;