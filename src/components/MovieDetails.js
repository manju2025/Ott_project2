// MovieDetails.js
import React from 'react';
import Navbar1 from './Navbar1';
import { useLocation } from 'react-router-dom';
import './MovieDetail.css'; // Import the CSS file

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <div>No movie details available</div>;
  }
  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <img href="./10-03-25.mp4 "className="ri-add-fill-icon1 alt" src="/32fef650-d748-46ed-a256-459e2dd16bd6_1708092302683693600.svg" /> 
        <div className="types">
            <div className="action">Action</div>
          </div>
          <div className="types1">
            <div className="action">Science Fiction</div>
          </div>
          <div className="types2">
            <div className="action">Suspense</div>
          </div>
          <div className="types3">
            <div className="action">Drama</div>
          </div>
          <br></br>
      <p >Overview: {movie.overview}</p>
      {/* <p >Original Language: {movie.original_language}</p> */}
      {/* <div  className="h-30-mi">Popularity: {movie.popularity}</div> */}
     
      <div className="more-like-this">More Like This</div>
      <div className="movie-sec-41">
        <div className="movies3">
       
          <img className="fan-img2-icon3" alt="" src="https://thebridge.in/wp-content/uploads/2019/12/Mary-Kom-717x1024.jpg" />
          <img className="fan-img3-icon3" alt="" src="https://www.scrolldroll.com/wp-content/uploads/2021/01/chillar-party-bollywood-movies-for-kids.jpg" />
          <img className="fan-img4-icon3" alt="" src="https://m.media-amazon.com/images/I/A1JVqNMI7UL._SY606_.jpg" />
          <img className="fan-img5-1-icon3" alt="" src="https://upload.wikimedia.org/wikipedia/en/7/71/Ride_On_2023.png" />
          <img className="fan-img5-2-icon3" alt="" src="https://en-images.kinorium.com/movie/600/2411523.jpg?1668569428" />
          <img className="fan-img6-icon3" alt="" src="https://bestsimilar.com/img/movie/thumb/c2/18736.jpg" />
          <img className="fan-img7-icon3" alt="" src="https://best-of-netflix.com/static/uploads/4/2020/11/The-10-best-%E2%80%98feel-good-anime-films-on-Netflix.jpg" />
          <img className="fan-img8-icon3" alt="" src="https://bestsimilar.com/img/movie/thumb/c2/18736.jpg" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar1/>
    </div>
    
  );
};

export default MovieDetails;
