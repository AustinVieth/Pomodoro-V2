import React from "react";
import "./task.css";

const taskStyle = {
  padding: "10px",
  display: "grid",
  fontSize: "1.25rem",
  borderBottom: "1px solid var(--secondaryColor)",
  alignItems: "baseline",
  justifyContent: "space-between",
  gridTemplateColumns: "6fr 2fr 2fr",
  gridTemplateRows: "1fr",
};

const counterStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignSelf: "center",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignSelf: "center",
};

const optionsStyle = {
  margin: "10px",
};

const descriptionStyle = {
  display: "flex",
  alignSelf: "center",
};

const Task = (props) => {
  return (
    <div style={taskStyle}>
      <div style={descriptionStyle}>{props.task.description}</div>
      <div style={counterStyle}>
        <i className="fas fa-minus task-btn"></i>
        <div>{props.task.pomodoroCount}</div>
        <i className="fas fa-plus task-btn"></i>
      </div>
      <div style={buttonStyle}>
        <i
          style={optionsStyle}
          className="fas fa-ellipsis-h task-btn options"
        ></i>
        <i style={optionsStyle} className="fas fa-trash-alt task-btn"></i>
      </div>
    </div>
  );
};

export default Task;
