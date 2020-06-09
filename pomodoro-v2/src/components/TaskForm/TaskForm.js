import React from "react";

const TaskForm = (props) => {
  return (
    <form>
      <input placeholder="Category"></input>
      <input placeholder="Description"></input>
      <button>+</button>
    </form>
  );
};

export default TaskForm;
