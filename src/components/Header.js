import React from "react";

const Header = () => {
  return (
    <div className="ui container">
      <h1
        className="ui large 
      header"
      >
        {" "}
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/PICOL_icon_News.svg"
          alt="Logo"
        />
        {`   NC News`}
      </h1>
      <br />
    </div>
  );
};

export default Header;
