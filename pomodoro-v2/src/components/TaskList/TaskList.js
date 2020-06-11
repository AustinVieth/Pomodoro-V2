import React from "react";

import Task from "./Task";
import "./taskList.css";

//for testing
const demoList = [
  {
    category: "Software",
    description: "Practice DataStructures and Algorithms",
    pomodoroCount: 3,
    id: "asdfhjkue1234as",
  },
  {
    category: "Babe",
    description: "Relaxtion Time",
    pomodoroCount: 5,
    id: "hui283940hfdklas8i9r",
  },
];

const TaskList = (props) => {
  // Create Dropdown react component: https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/

  const renderListContents = (taskList) => {
    return taskList.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  };

  return (
    <div className="task-list-container">
      <div className="category-dropdown">Category v</div>
      <div className="task-list">{renderListContents(demoList)}</div>
    </div>
  );
};

export default TaskList;
