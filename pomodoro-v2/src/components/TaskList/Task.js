import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, selectTask } from "../../actions";

import "./task.css";

const Task = (props) => {
  const isSelected = () => {
    return props.task.id === props.selectedTask.id;
  };

  const taskStyle = {
    padding: "10px",
    display: "grid",
    fontSize: "1.25rem",
    borderBottom: "1px solid var(--secondaryColor)",
    alignItems: "baseline",
    justifyContent: "space-between",
    gridTemplateColumns: "6fr 2fr 2fr",
    gridTemplateRows: "1fr",
    background: isSelected() ? "var(--activeColor)" : "var(--primaryColor)",
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
    textDecoration: props.task.pomodoroCount <= 0 ? "line-through" : "none",
  };

  const updatePomodoroCount = (change) => {
    let newCount = props.task.pomodoroCount;
    if (change === "increase") {
      newCount += 1;
    } else if (change === "decrease") {
      newCount -= 1;
    }

    props.updateTask(props.task.id, newCount);
  };

  const setTask = () => {
    props.selectTask(props.task.id);
  };

  const deleteTask = () => {
    props.deleteTask(props.task.id);
    if (props.selectedTask === props.task) {
      if (props.selected.tasks.length > 0) {
        props.selectTask(props.selected.tasks[0].id);
      } else {
        //because the selectTask action creator has logic to check if it's a valid Id,passing no argument sets the selected task to a blank object
        props.selectTask();
      }
    }
  };

  return (
    <div style={taskStyle}>
      <div className="description" onClick={setTask} style={descriptionStyle}>
        {props.task.description}
      </div>
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
          onClick={deleteTask}
          style={optionsStyle}
          className="fas fa-trash-alt task-btn"
        ></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selected: state.selected, selectedTask: state.selectedTask };
};

export default connect(mapStateToProps, { deleteTask, updateTask, selectTask })(
  Task
);
