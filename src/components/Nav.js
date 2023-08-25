import React from "react";

import "./Nav.css";
import "../App.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
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
}
