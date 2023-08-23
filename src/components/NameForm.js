import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "../App.css"

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
      <Container maxWidth="lg" align="center">
        <b>Enter your name:</b> <br />
        <input
          className="name-input"
          type="text"
          value={this.state.sendername}
          onChange={(event) => {
            this._updateField("sendername", event.target.value);
          }}
        />
        <br />
        <br />
        <b>Enter your friend or significant others name:</b> <br />
        <input
          className="name-input"
          type="text"
          value={this.state.username}
          onChange={(event) => {
            this._updateField("username", event.target.value);
          }}
        />
        <br />
        <br />
        <Button variant="outlined" size="large" onClick={this.generateLink}>
          Get Link
        </Button>
        <br />
        <br />
        <div>
          <Typography variant="subtitle1">
            <b>Send this link to the person that you think is mad at you:</b>
          </Typography>
          <br />
          <a href={this.state.link}>{this.state.link}</a>
        </div>
        <br />
        <br />
        <br />
      </Container>
    );
  }
}
export default NameForm;
