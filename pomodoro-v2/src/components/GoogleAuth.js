import React from "react";

class GoogleAuth extends React.Component {
  buttonStyle = {
    background: "var(--primaryRed)",
    fontWeight: "bold",
    fontFamily: "var(--primaryFont)",
    letterSpacing: "var(--primarySpacing)",
    color: "var(--primaryWhite)",
    borderRadius: "50px",
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: ".315rem .630rem",
  };

  render() {
    return (
      <button style={this.buttonStyle}>
        <i
          style={{
            fontSize: "2rem",
            marginRight: ".75rem",
            color: "var(--primaryWhite)",
          }}
          className="fab fa-google"
        ></i>{" "}
        Login with Google
      </button>
    );
  }
}

export default GoogleAuth;
