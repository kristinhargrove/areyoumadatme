import React from "react";
import NameForm from "./NameForm";
import Quiz from "../Quiz";

import { jsQuiz } from "../constants";

import "./Main.css";
import "../App.scss";

class Main extends React.Component {
  componentDidMount() {
    // api request for fun image or quote
    // the fetchImage/fetchQuote api request could even be another redux action
    // if you make this component into a container
    // you can leave everything below but add to the bottom of this file
    // export default connect(mapStateToProps, mapDispatchToProps)(Main)
    // And also adding a mapStateToProps which would return the quote/image
    // and mapDispatch to props which would dispatch the fetchImage/fetchQuote action
  }

  render() {
    return (
      <div>
        {/* {fun image or quote here} */}
        <h1 className="title-h1">Are you MAD at me?</h1>
        <br />
        Are you mad at me is a fun way to figure out if that person you think is
        mad at you is actually mad.
        <br />
        Fill out your name, their name, and send them the link to the quiz.
        <br />
        <br />
        If they are mad at you, we'll ask them to dinner or to hang out with
        you, on your behalf.
        <br />
        <b>DISCLAIMER:</b> We won't be paying for dinner though, sorry.
        <br />
        <br />
        {/* <Link to='/quiz'><Button variant="outlined" size='large'>Start</Button></Link>
                    <br /><br /> */}
        <NameForm />
      </div>
    );
  }
}

export default Main;
