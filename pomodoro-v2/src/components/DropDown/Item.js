import React from "react";

const Item = (props) => {
  return (
    <li onClick={() => props.selectItem(props.item.id)} className="dd-item">
      {props.item.title}
    </li>
  );
};

export default Item;
