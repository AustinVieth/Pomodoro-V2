import React from "react";
import "./app-styles.css";

import Clock from "../../Clock/Clock";
import TaskForm from "../../TaskForm/TaskForm";
import Navigation from "../../Navigation/Navigation";
import TaskList from "../../TaskList/TaskList";

const App = (props) => {
  return (
    <div class="app">
      POMODORO
      <Navigation />
      <Clock />
      <TaskForm />
      <TaskList />
      <div>Total Time Remaining: 04:20:30</div>
    </div>
  );
};

export default App;
