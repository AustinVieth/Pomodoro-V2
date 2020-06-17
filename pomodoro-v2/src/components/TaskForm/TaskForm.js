import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createCategory, createTask } from "../../actions";

import "./taskForm.css";

class TaskForm extends React.Component {
  renderInput({ input, placeholder, meta, className }) {
    return (
      <input
        className={className}
        placeholder={placeholder}
        autoComplete="off"
        {...input}
      />
    );
  }

  onSubmit = (formValues) => {
    const { category, description } = formValues;

    if (!this.isValid(formValues)) {
      return;
    }

    if (!Object.keys(this.props.categories).includes(category)) {
      this.props.createCategory(category);
      this.props.createTask(category, description);
    } else {
      this.props.createTask(category, description);
    }
  };

  isValid = ({ category, description }) => {
    console.log(category, description);
    //Still need to implement visual queues for validation.
    if (category === undefined || description === undefined) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <div className="container">
        <form
          className="taskform"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="category"
            className="category"
            placeholder="Category"
            component={this.renderInput}
          ></Field>
          <div className="description-container">
            <Field
              name="description"
              className="description"
              placeholder="Task"
              component={this.renderInput}
            ></Field>
            <button className="add-button">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const reduxFormed = reduxForm({
  form: "categoryCreate",
})(TaskForm);

export default connect(mapStateToProps, { createCategory, createTask })(
  reduxFormed
);
