import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../../actions";

import "./task.css";
import { update } from "lodash";

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
  useEffect(() => {
    console.log("re-rendered");
  });

  const updatePomodoroCount = (change) => {
    let newCount = props.task.pomodoroCount;
    if (change === "increase") {
      newCount += 1;
    } else if (change === "decrease") {
      newCount -= 1;
    }
    console.log("clicked");

    props.updateTask(props.task.id, newCount);
  };

  return (
    <div style={taskStyle}>
      <div style={descriptionStyle}>{props.task.description}</div>
      <div style={counterStyle}>
        <i
          onClick={() => updatePomodoroCount("decrease")}
          className="fas fa-minus task-btn"
        ></i>
        <div>{props.task.pomodoroCount}</div>
        <i
          onClick={() => updatePomodoroCount("increase")}
          className="fas fa-plus task-btn"
        ></i>
      </div>
      <div style={buttonStyle}>
        <i
          style={optionsStyle}
          className="fas fa-ellipsis-h task-btn options"
        ></i>
        <i
          onClick={() => props.deleteTask(props.task.id)}
          style={optionsStyle}
          className="fas fa-trash-alt task-btn"
        ></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selected: state.selected };
};

export default connect(mapStateToProps, { deleteTask, updateTask })(Task);
