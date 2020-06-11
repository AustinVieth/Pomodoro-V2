import React from "react";

import "./navigation.css";

const Navigation = (props) => {
  const ulStyle = {
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    fontWeight: "bold",
    alignItems: "center",
  };

  const buttonStyle = {
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

  return (
    <ul style={ulStyle}>
      <li>How To</li>
      <li>Settings</li>
      <li>
        <button style={buttonStyle}>
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
      </li>
    </ul>
  );
};

export default Navigation;
