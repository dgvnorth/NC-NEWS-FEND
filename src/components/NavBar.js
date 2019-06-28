import React from "react";
import { Link } from "@reach/router";
import "../NavBar.css";

const NavBar = () => {
  return (
    <div className="ui container">
      <div className="blue ui buttons">
        <Link to="/">
          <button className="ui medium button">Home</button>
        </Link>
        <Link to="/topics/all">
          <button className="ui medium button">All Topics</button>
        </Link>
        <Link to="/topics/coding">
          <button className="ui medium button">Coding</button>
        </Link>
        <Link to="/topics/cooking">
          <button className="ui medium button">Cooking</button>
        </Link>
        <Link to="/topics/football">
          <button className="ui medium button">Football</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
