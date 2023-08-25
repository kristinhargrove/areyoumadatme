import React from "react";

import "./Nav.css";
import "../App.scss";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

const Nav = () => (
  <nav>
    <Link color="inherit" to="/">
      home
    </Link>
    /
    <Link color="inherit" to="/about">
      about
    </Link>
    /
    <Link color="textPrimary" to="/quiz">
      quiz
    </Link>
  </nav>
);

export default Nav;
