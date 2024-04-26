import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css'

const Home = () => {
    //   useEffect(() => {
    //     // Initialize the carousel
    //     const carousel = document.getElementById('carouselExample');
    //     new window.bootstrap.Carousel(carousel);
    //   }, []);

    return (
        <>

            <nav>
                <div className='item'><h1>ENTERTAINMENT</h1></div>
                <ul>
                    <li className='btn btn-danger'>sigin</li>
                    <li className='btn btn-danger'>contact</li>
                </ul>

            </nav>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://variety.com/wp-content/uploads/2022/12/100-Greatest-Movies-Variety.jpg?w=1920&h=1080&crop=1" className="d-block w-100 size" alt="movie" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.shutterstock.com/shutterstock/photos/761313844/display_1500/stock-photo--d-illustration-of-musical-notes-and-musical-signs-of-abstract-music-sheet-songs-and-melody-concept-761313844.jpg" className="d-block w-100 size" alt="movie"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://bl-i.thgim.com/public/incoming/e6huvw/article66548784.ece/alternates/LANDSCAPE_1200/BookMyShow.jpg" className="d-block w-100 size" alt="bookmyshow" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container1'>
                <img src='https://nypost.com/wp-content/uploads/sites/2/2022/09/newspress-collage-23844354-1663091442500.jpg?quality=75&strip=all&1663940411' />
                <div className='subcontainer text-center'>
                    <h2 className='text-center'>Movies</h2>
                    <p className='text-center'>
                        Sure! Here's a playful take on describing movies:

                        "Movies are like time machines where you can travel to the past, the future, or even to galaxies far, far away—all from the comfort of your couch! It's like going on a rollercoaster ride through emotions, from laughing so hard you snort popcorn out your nose to gripping the edge of your seat in suspense, all while munching on snacks like a professional. And let's not forget those moments where you're yelling at the screen like the characters can actually hear you. It's a wild adventure where the only limit is your imagination and the size of your popcorn bucket!"
                    </p>
                    <button  className='text-center btn btn-danger'>sigin</button>
                </div>
            </div>
            <div className='container1'>
                <img src='https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg' />
                <div className='subcontainer text-center'>
                    <h2 className='text-center'>music</h2>
                    <p className='text-center'>
                        Sure! Here's a playful take on describing movies:

                        "Movies are like time machines where you can travel to the past, the future, or even to galaxies far, far away—all from the comfort of your couch! It's like going on a rollercoaster ride through emotions, from laughing so hard you snort popcorn out your nose to gripping the edge of your seat in suspense, all while munching on snacks like a professional. And let's not forget those moments where you're yelling at the screen like the characters can actually hear you. It's a wild adventure where the only limit is your imagination and the size of your popcorn bucket!"
                    </p>
                    <button  className='text-center btn btn-danger'>sigin</button>

                </div>
            </div>
            <div className='container1'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TdvO1zQftdh9WmTfnJmihs6hZlisrRrJEA&s'/>
                <div className='subcontainer text-center'>
                    <h2 className='text-center'>Book My Show</h2>
                    <p className='text-center'>
                        Sure! Here's a playful take on describing movies:

                        "Movies are like time machines where you can travel to the past, the future, or even to galaxies far, far away—all from the comfort of your couch! It's like going on a rollercoaster ride through emotions, from laughing so hard you snort popcorn out your nose to gripping the edge of your seat in suspense, all while munching on snacks like a professional. And let's not forget those moments where you're yelling at the screen like the characters can actually hear you. It's a wild adventure where the only limit is your imagination and the size of your popcorn bucket!"
                    </p>
                    <button className='text-center btn btn-danger'>sigin</button>
                </div></div>
        </>
    );
}

export default Home;
