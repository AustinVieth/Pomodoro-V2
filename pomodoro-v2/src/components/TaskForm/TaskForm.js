import React from "react";
import "./taskForm.css";

const TaskForm = (props) => {
  return (
    <div className="container">
      <form className="taskform">
        <input className="category" placeholder="Category"></input>
        <div className="description-container">
          <input className="description" placeholder="Description"></input>
          <button className="add-button">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
