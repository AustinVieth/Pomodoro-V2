import React from "react";
import "./app-styles.css";

import Clock from "../../Clock/Clock";
import TaskForm from "../../TaskForm/TaskForm";
import Navigation from "../../Navigation/Navigation";
import TaskList from "../../TaskList/TaskList";
import { getByDisplayValue } from "@testing-library/react";

const style = {
  display: "grid",
  gridTemplateColumns: "5fr 3fr",
  gridTemplateRows: "9fr 8fr 8fr 40fr 14fr 21fr",
  gridTemplateAreas: `
  "title navigation"
  "blank tasklist"
  "blank tasklist"
  "clock tasklist"
  "clock tasklist"
  "taskform totaltime"
  `,
  maxHeight: "calc(100vh - 12.03vh)",
};

const App = (props) => {
  return (
    <div class="app" style={style}>
      <h1 style={{ gridArea: "title" }}>POMODORO</h1>

      <div style={{ gridArea: "navigation" }}>
        <Navigation />
      </div>

      <div style={{ gridArea: "tasklist" }}>
        <TaskList />{" "}
      </div>

      <div style={{ gridArea: "clock" }}>
        <Clock />
      </div>

      <div style={{ gridArea: "taskform" }}>
        <TaskForm />
      </div>

      <div style={{ gridArea: "totaltime" }}>
        Total Time Remaining: 04:20:30
      </div>
    </div>
  );
};

export default App;
