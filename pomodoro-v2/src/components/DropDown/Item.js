import React from "react";
import { connect } from "react-redux";
import { deleteCategory } from "../../actions";

const Item = (props) => {
  const deleteStyle = {
    justifySelf: "flex-end",
    width: "fit-content",
    transition: "all 0.2s ease-in-out",
  };

  const deleteItem = () => {
    if (props.categories.length === 1) {
      alert(
        "You cannot delete your only category, Please add another category before deleting."
      );
      return;
    }

    props.deleteCategory(props.item.category);
  };

  return (
    <li className="dd-item">
      <div
        onClick={() => props.selectItem(props.item.category)}
        className="title"
      >
        {props.item.category}
      </div>
      <div onClick={deleteItem} className="delete" style={deleteStyle}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) };
};

export default connect(mapStateToProps, { deleteCategory })(Item);
