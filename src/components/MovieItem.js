import React from "react";
import "./Movie.css";

const MovieItem = ({ movie, onSelectMovie }) => {
  const setSelectedMovie = () => {
    onSelectMovie(movie);
  };

  return (
    <div
      className="card"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onClick={() => setSelectedMovie()}
    >
      <div className="image">
        <img alt={movie.GameTitle} src={movie.GameImage} />
      </div>
      <div className="content">
        <div className="header">{movie.GameTitle}</div>
        <div className="meta">
          <p>{movie.Subject}</p>
        </div>
        <div className="description">{movie.GameDescription}</div>
      </div>
      <div className="extra content">
        <span className="right floated">{movie.Level}</span>
        <span>{movie.Group}</span>
      </div>
    </div>
  );
};

export default MovieItem;
