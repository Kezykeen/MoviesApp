import React from "react";
import "./SideBar.css";

const SideBar = ({
  uniqueMovieLevelsArray,
  uniqueMovieGroupsArray,
  setFilterTerm,
}) => {
  const groupNames = uniqueMovieGroupsArray.map((prop) => {
    return (
      <li
        className="sidebar-list"
        key={prop.key}
        onClick={() => onClickSideBarItem(prop)}
      >
        {prop[1]}
      </li>
    );
  });
  const levelNames = uniqueMovieLevelsArray.map((prop) => {
    return (
      <li
        className="sidebar-list"
        key={prop.key}
        onClick={() => onClickSideBarItem(prop)}
      >
        {prop[1]}
      </li>
    );
  });

  const onClickSideBarItem = (prop) => {
    setFilterTerm(prop);
  };

  const getAllMovies = () => {
    setFilterTerm([]);
  };

  return (
    <div className="sidebar">
      <div onClick={() => getAllMovies()}>
        <p className="sidebar-header">All Movies</p>
      </div>
      <div className="sidebar-section">
        <p>Group</p>
        <ul>{groupNames}</ul>
      </div>
      <div className="sidebar-section">
        <p>Level</p>
        <ul>{levelNames}</ul>
      </div>
    </div>
  );
};

export default SideBar;
