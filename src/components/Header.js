import React from "react";

import "./Header.css";
import "../App.scss"

import { Link } from "react-router-dom";

const Header = () => (
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

export default Header;
