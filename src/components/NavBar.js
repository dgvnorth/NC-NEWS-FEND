import React from "react";
import { Link } from "@reach/router";
import "../NavBar.css";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "crimson" : "white")};
  color: ${props => (props.primary ? "white" : "crimson")};

  font-size: 1em;
  margin: 0em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

// const LogInButton = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => (props.primary ? "crimson" : "white")};
//   color: ${props => (props.primary ? "white" : "crimson")};

//   font-size: 1em;
//   margin-left: 0em;
//   padding: 0.25em 1em;
//   border: 1px solid palevioletred;
//   border-radius: 3px;
// `;

const Wrapper = styled.section`
  padding-left: 10px;
  align: center
  background: white;
`;

const NavBar = () => {
  return (
    <div>
      <Wrapper>
        <Link to="/">
          <Button primary>Home</Button>
        </Link>
        {/* <Link to="/">
          <LogInButton>Logged as:</LogInButton>
        </Link> */}
        <br />
        <Link to="/topics/all">
          <Button>All</Button>
        </Link>
        <Link to="/topics/coding">
          <Button>Coding</Button>
        </Link>
        <Link to="/topics/cooking">
          <Button>Cooking</Button>
        </Link>
        <Link to="/topics/football">
          <Button>Football</Button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default NavBar;
