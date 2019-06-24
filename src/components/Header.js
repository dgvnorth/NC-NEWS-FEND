import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 2em;
  text-align: center;
  color: crimson;
`;

const Wrapper = styled.section`
  padding: 1px;
  background: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>
        {" "}
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/PICOL_icon_News.svg"
          alt="Logo"
        />
        {`   NC News`}
      </Title>
    </Wrapper>
  );
};

export default Header;
