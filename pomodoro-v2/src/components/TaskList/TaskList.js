import React from "react";
import "./taskList.css";

//for testing
const demoList = [
  {
    category: "Software",
    description: "Practice DataStructures and Algorithms",
    id: "asdfhjkue1234as",
  },
  {
    category: "Babe",
    description: "Relaxtion Time",
    id: "hui283940hfdklas8i9r",
  },
];

const TaskList = (props) => {
  // Create Dropdown react component: https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/

  const renderListContents = (taskList) => {
    return taskList.map((task) => {
      return <div key={task.id}>{task.description}</div>;
    });
  };

  return (
    <div className="task-list">
      <header>TO-DO</header>
      <div>Category v</div>
      <div className="List">{renderListContents(demoList)}</div>
    </div>
  );
};

export default TaskList;
