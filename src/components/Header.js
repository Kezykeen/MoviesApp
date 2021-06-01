import React from "react";
import "./Header.css";

const Header = ({ text }) => {
  return (
    <header className="Header">
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
