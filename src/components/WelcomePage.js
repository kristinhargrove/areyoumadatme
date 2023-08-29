import { React } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function WelcomePage() {
  const { friendName, name } = useParams();
  console.log(name);
  console.log(friendName);

  return (
    <div className="main-content">
      <h1>Test</h1>
      <h4>
        Hey {friendName},
        <br />
      </h4>
      <br />
      your friend, {name}, thinks you might be mad at them, so they are sending
      you this quiz.
      <br />
      Are you?
      <br />
      <br />
      Take this quiz and find out!
      <br />
      <div>
        <Link to="/quiz">
          <button className="button">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}
