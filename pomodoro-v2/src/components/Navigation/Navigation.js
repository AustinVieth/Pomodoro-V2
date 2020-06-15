import React from "react";

import "./navigation.css";
import GoogleAuth from "../GoogleAuth";

const Navigation = (props) => {
  const ulStyle = {
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    fontWeight: "bold",
    alignItems: "center",
  };

  return (
    <ul style={ulStyle}>
      <li>How To</li>
      <li>Settings</li>
      <li>
        <GoogleAuth />
      </li>
    </ul>
  );
};

export default Navigation;
