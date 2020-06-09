import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div className="clock">
        <div className="time">20:00</div>
        <button className="main-btn">Start</button>
      </div>
    );
  }
}

export default Clock;
