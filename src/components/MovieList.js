import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ MovieArray, onSelectMovie }) => {
  if (MovieArray == null) {
    return <div>An error occured trying to load data</div>;
  }
  const movieArray = MovieArray.map((movie) => {
    return <MovieItem movie={movie} onSelectMovie={onSelectMovie} />;
  });
  return <div className="ui link cards">{movieArray}</div>;
};

export default MovieList;
