import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import kidsApi from "../apis/kidsApi";
import "./App.css";
import SideBar from "./SideBar";
import _ from "lodash";
import Header from "./Header";
import MovieDetail from "./MovieDetail";

const App = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterTerm, setFilterTerm] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // used fetch to get the api from source but was blocked by CORS policy
    // had to import the api(kidsApi) locally
    const res = kidsApi();
    setMovieArray(res);
  }, []);

  const filterByNavProp = movieArray.filter((movie) => {
    return movie[filterTerm[0]] === filterTerm[1];
  });

  const filteredMovies = filterByNavProp.filter((movie) => {
    return movie.GameTitle.indexOf(searchTerm) !== -1;
  });

  // dynamically populate the sidebar nav properity with unique properties from the api
  const getUniqueListByProp = (arr, key) => {
    var arrayOfProps = [];
    arr.forEach((element) => {
      arrayOfProps.push(element[key]);
    });
    var uniqueArrayOfProps = _.uniqWith(arrayOfProps, _.isEqual);
    var arrayOfPropsWithKey = [];
    uniqueArrayOfProps.map((prop) => {
      return arrayOfPropsWithKey.push([key, prop]);
    });

    return arrayOfPropsWithKey;
  };

  const uniqueMovieGroupsArray = getUniqueListByProp(movieArray, "Group");
  const uniqueMovieLevelsArray = getUniqueListByProp(movieArray, "Level");

  return (
    <div>
      <Header text={"9ijakids Movie App"} />
      <div className="ui container">
        <SearchBar setSearchTerm={setSearchTerm} />

        <div className="ui grid">
          <div className="ui row">
            <div className="three wide column">
              <SideBar
                uniqueMovieGroupsArray={uniqueMovieGroupsArray}
                uniqueMovieLevelsArray={uniqueMovieLevelsArray}
                setFilterTerm={setFilterTerm}
              />
            </div>
            <div className="thirteen wide column">
              <MovieList
                MovieArray={filteredMovies}
                onSelectMovie={setSelectedMovie}
              />
            </div>
          </div>
        </div>
      </div>
      <MovieDetail movie={selectedMovie} />
    </div>
  );
};

export default App;
