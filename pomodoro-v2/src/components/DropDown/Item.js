import React from "react";

const Item = (props) => {
  const deleteStyle = {
    justifySelf: "flex-end",
    width: "fit-content",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <li onClick={() => props.selectItem(props.item.id)} className="dd-item">
      <div className="title">{props.item.title}</div>
      <div className="delete" style={deleteStyle}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </li>
  );
};

export default Item;
