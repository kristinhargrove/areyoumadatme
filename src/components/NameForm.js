import { useState } from "react";

import "../App.scss";

export default function NameForm() {
  const [name, setName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [customLink, setCustomLink] = useState("");

  const link = `https://areyoumad.netlify.app/welcomePage`;

  const onButtonClick = (name, friendName) => {
    if (name && friendName) {
      setCustomLink(link + "/" + name + "/" + friendName);
    } else {
      alert("Please enter your name and your friend's name");
    }
  };

  console.log(`this is name` + name);
  console.log("this is friendName" + friendName);
  return (
    <div className="main-content">
      <div className="name-form">
        <b>Enter your name:</b>
        <input
          className="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="name-form">
        <b>Enter your friend's name:</b>
        <input
          className="name-input"
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>
      <button
        className="button"
        onClick={() => onButtonClick(name, friendName)}
      >
        Get Link
      </button>
      <div className="custom-link">
        <b>Custom Link:</b>
        {customLink}
      </div>
    </div>
  );
}
