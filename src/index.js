import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body{
    min-height: 100vh;
  };

  body{
    box-sizing: border-box;
    position: relative;
    padding-bottom: 76px;
  }

  body *{
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
