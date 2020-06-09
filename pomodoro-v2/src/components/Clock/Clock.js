import React from "react";
import "./clock.css";

class Clock extends React.Component {
  containerStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: ".77fr .23fr",
  };

  timeStyle = {
    fontSize: "20rem",
    fontFamily: "var(--secondaryFont)",
    height: "15px",
    letterSpacing: "1.5rem",
    textAlign: "center",
    marginTop: "-6.5rem",
  };

  buttonStyle = {
    alignSelf: "center",
    justifySelf: "center",
    height: "80%",
    width: "90%",
    color: "var(--primaryGreen)",
    border: "1px solid var(--primaryGreen)",
    background: "none",
    borderRadius: "50px",
    fontFamily: "var(--primaryFont)",
    letterSpacing: "var(--primarySpacing)",
    fontSize: "3rem",
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <span style={this.timeStyle}>20:00</span>
        <button style={this.buttonStyle}>Start</button>
      </div>
    );
  }
}

export default Clock;
