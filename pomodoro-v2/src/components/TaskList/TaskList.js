import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCategories, selectCategory } from "../../actions";
import Task from "./Task";
import Dropdown from "../DropDown/DropDown";
import "./taskList.css";

const TaskList = (props) => {
  useEffect(() => {
    props.fetchCategories();
    props.selectCategory("Category");
  }, []);

  const renderListContents = () => {
    return props.selected.tasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  };

  return (
    <div className="task-list-container">
      <div style={{ textAlign: "center" }}>
        <Dropdown items={props.categories} header="Category" />
      </div>

      <div className="task-list">{renderListContents()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
    selected: state.selected,
  };
};

export default connect(mapStateToProps, { fetchCategories, selectCategory })(
  TaskList
);
