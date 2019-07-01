import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="ui container">
      <div className="blue ui buttons">
        <Link to="/">
          <button className="ui tiny button">Home</button>
        </Link>
        <Link to="/topics/coding">
          <button className="ui tiny button">Coding</button>
        </Link>
        <Link to="/topics/cooking">
          <button className="ui tiny button">Cooking</button>
        </Link>
        <Link to="/topics/football">
          <button className="ui tiny button">Football</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
