import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Background from '../../assets/background2.jpg'

const UpdateGame = () => {
    const review = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (user) {
            setEmail(user.email || '');
            setName(user.displayName || '');
        }
    }, [user])

    const handleReviewUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const name = form.name.value;
        const reviewUpdate = { photo, title, description, rating, year, genre, email, name }
        console.log(reviewUpdate)

        fetch(`http://localhost:5000/gamers/${review._id}`, {

            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewUpdate)

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "success!",
                        text: "Review Updated Successfully!",
                        icon: "success"
                    });
                    navigate("/myReviews");
                }
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
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <div className="max-w-3xl mx-auto my-20 p-8 rounded-2xl shadow-xl bg-purple-100">
                    <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Update Review</h2>

                    <form onSubmit={handleReviewUpdate} className="space-y-4">

                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Game Cover Image (URL)</label>
                            <input
                                name='photo' type="url" defaultValue={review.photo}
                                placeholder="Enter game cover image URL"
                                className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Game Title / Name</label>
                            <input
                                name='title' type="text" defaultValue={review.title}
                                placeholder="Enter game title"
                                className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Review Description</label>
                            <textarea
                                name='description' defaultValue={review.description}
                                placeholder="Write your review here..."
                                className="w-full textarea textarea-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Rating (1-5)</label>
                            <input
                                name='rating' type="number" defaultValue={review.rating}
                                min="1"
                                max="5"
                                step="0.1"
                                placeholder="Rating"
                                className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Publishing Year</label>
                            <input
                                name='year' type="number" defaultValue={review.year}
                                placeholder="Enter the year of publishing"
                                className="w-full input input-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">Genre</label>
                            <select name='genre' defaultValue={review.genre} className="w-full select select-bordered border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option disabled selected>Select Genre</option>
                                <option>Action</option>
                                <option>RPG</option>
                                <option>Adventure</option>
                                <option>Strategy</option>
                                <option>Sports</option>
                            </select>
                        </div>


                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">User Email</label>
                            <input
                                name='email' type="email"
                                value={email}
                                readOnly
                                className="w-full input input-bordered bg-gray-100 text-gray-700 border-purple-300"
                            />
                        </div>

                        <div>
                            <label className="block text-purple-700 font-semibold mb-1">User Name</label>
                            <input
                                name='name' type="text"
                                value={name}
                                readOnly
                                className="w-full input input-bordered bg-gray-100 text-gray-700 border-purple-300"
                            />
                        </div>


                        <div className="text-center mt-6">
                            <button
                                name='' type="submit"
                                className="btn bg-purple-600 w-full text-white hover:bg-purple-700 px-6"
                            >
                                Update Review
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default UpdateGame;