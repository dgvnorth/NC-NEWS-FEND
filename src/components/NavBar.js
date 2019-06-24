import React from "react";
import { Router, Link } from "@reach/router";
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

const LogInButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "crimson" : "white")};
  color: ${props => (props.primary ? "white" : "crimson")};

  font-size: 1em;
  margin-left: 0em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  padding-left: 100px;
  background: white;
`;

const NavBar = () => {
  return (
    <div>
      <Wrapper>
        <Link to="/">
          <Button primary>Home</Button>
        </Link>
        <Link to="/">
          <LogInButton>Logged as:</LogInButton>
        </Link>
        <br />
        <Link to="/topics">
          <Button>Coding</Button>
        </Link>
        <Link to="/topics">
          <Button>Cooking</Button>
        </Link>
        <Link to="/topics">
          <Button>Football</Button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default NavBar;
