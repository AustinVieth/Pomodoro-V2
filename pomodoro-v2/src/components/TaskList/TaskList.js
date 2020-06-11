import React from "react";

import Task from "./Task";
import Dropdown from "../DropDown/DropDown";
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

const demoItems = [
  {
    id: 0,
    title: "category 1",
  },
  {
    id: 1,
    title: "category 2",
  },
  {
    id: 2,
    title: "category 3",
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
      <div style={{ textAlign: "center" }}>
        <Dropdown items={demoItems} header="Category" />
      </div>

      <div className="task-list">{renderListContents(demoList)}</div>
    </div>
  );
};

export default TaskList;
