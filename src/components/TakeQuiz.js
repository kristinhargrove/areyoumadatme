import React from "react";
import { jsQuiz } from "../constants";
import Quiz from "../Quiz";

import "./Main.css";
import "../App.scss";

export default function TakeQuiz() {
  return <Quiz questions={jsQuiz.questions} />;
}
