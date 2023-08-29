// import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.scss";

import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import WelcomePage from "./components/WelcomePage";
// import Question from "./containers/Question";
import FriendQuestions from "./containers/FriendQuestions";
import Results from "./containers/Results";
import Quiz from "./Quiz";
import TakeQuiz from "./components/TakeQuiz";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />}>
            {/* <Main /> */}
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="welcomepage/:friendName/:name"
            element={<WelcomePage />}
          ></Route>
          <Route path="/quiz" element={<TakeQuiz />}></Route>
          <Route path="/friendquiz" element={<FriendQuestions />}></Route>
          {/* <Route>
            <Results path="/results" />
          </Route> */}
          {/* <Route path="*">
            <Navigate to="/" />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
