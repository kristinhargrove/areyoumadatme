import React from "react";
// import Button from "@material-ui/core/Button";

import "../App.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      sendername: "",
      link: "https://areyoumad.netlify.app/welcomepage",
    };
  }

  _updateField = (field, val) => {
    this.setState({
      [field]: val,
    });
  };

  generateLink = () => {
    this.setState({
      link:
        this.state.link +
        "/" +
        this.state.username +
        "/" +
        this.state.sendername,
    });
  };

  render() {
    return (
      <div className="main-content">
        <div className="name-form">
          <b>Enter your name:</b>
          <input
            className="name-input"
            type="text"
            value={this.state.sendername}
            onChange={(event) => {
              this._updateField("sendername", event.target.value);
            }}
          />
        </div>
        <div className="name-form">
          <b>Enter your friend or significant others name:</b> <br />
          <input
            className="name-input"
            type="text"
            value={this.state.username}
            onChange={(event) => {
              this._updateField("username", event.target.value);
            }}
          />
        </div>
        {/* <Button variant="outlined" size="large" onClick={this.generateLink}>
          Get Link
        </Button> */}
        <button className="button" onClick={this.generateLink}>
            Get Link
        </button>
        <div>
          Send this link to the person that you think is mad at you:
          <br />
          <a href={this.state.link}>{this.state.link}</a>
        </div>
      </div>
    );
  }
}

export default NameForm;
