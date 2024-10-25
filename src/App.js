import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM0fE3S6p4/RT+Vt5eYw/6oJ2sy8mT8d3U2l8T" crossorigin="anonymous"></link>

      </head>
      
      <h1>MovieMania</h1>
      {selectedMovie ? (
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <p><strong>Year:</strong> {selectedMovie.year}</p>
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p><strong>Description:</strong> {selectedMovie.description}</p>
          <button onClick={handleBackClick}>Back to Movies</button>
        </div>
      ) : (
        <div>
         <nav class="nav1">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#genre">Genre</a></li>
    <li><a href="#categories">Categories</a></li>
  </ul>
</nav>

          <h2>List of available movies</h2>
          <div className="movie-list">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id} onClick={() => handleMovieClick(movie)}>
                <h3>{movie.title} ({movie.year})</h3>
                {/* <p><strong>Genre:</strong> {movie.genre}</p>
                <p>{movie.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
      <br></br>
      <hr></hr>
      <footer>
  <p>Connect with us</p>
  <ul class="social-links">
    <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
    <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a></li>
    <li><a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>
  </ul>
</footer>


    </div>
    
  );
};

export default App;
