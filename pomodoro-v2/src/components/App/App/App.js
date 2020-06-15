import React from "react";
import "./app-styles.css";

import Clock from "../../Clock/Clock";
import TaskForm from "../../TaskForm/TaskForm";
import Navigation from "../../Navigation/Navigation";
import TaskList from "../../TaskList/TaskList";

const style = {
  display: "grid",
  gridTemplateColumns: "5fr 3fr",
  gridTemplateRows: "9fr 8fr 62fr 21fr",
  gridTemplateAreas: `
  "title navigation"
  "blank header"
  "clock tasklist"
  "taskform totaltime"
  `,
  maxHeight: "calc(100vh - 12.03vh)",
};

class App extends React.Component {
  state = { categories: {} };

  render() {
    return (
      <div className="app" style={style}>
        <div
          style={{
            display: "flex",
            gridArea: "title",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "2.8125rem",
              fontWeight: "bold",
              height: "3.4375rem",
              width: "20.375rem",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            POMODORO
          </span>
        </div>

        <div style={{ gridArea: "navigation" }}>
          <Navigation />
        </div>

        <header
          style={{
            gridArea: "header",
            fontSize: "3.3125rem",
            textAlign: "center",
          }}
        >
          TO-DO
        </header>

        <div style={{ gridArea: "tasklist" }}>
          <TaskList />{" "}
        </div>

        <div style={{ gridArea: "clock" }}>
          <Clock />
        </div>

        <div style={{ gridArea: "taskform" }}>
          <TaskForm />
        </div>

        <div style={{ gridArea: "totaltime", display: "grid" }}>
          <div className="total-time">Total Time Remaining: 04:20:30</div>
        </div>
      </div>
    );
  }
}

export default App;
