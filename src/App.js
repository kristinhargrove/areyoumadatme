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

// import { Provider } from "react-redux";
// import { store } from "./store"; //don't need redux
import { createBrowserRouter, BrowserRouter, Switch, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
          <CssBaseline /> */}
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/welcomepage/:username/:sendername">
            <WelcomePage />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/friendquiz">
            <FriendQuestions />
          </Route>
          <Route>
            <Results path="/results" />
          </Route>
          <Route path="*">
            <Navigate to="/" />
          </Route>
        </Switch>
        {/* </Provider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
