import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../actions";

import "./dropDown.css";
import Item from "./Item";

class DropDown extends React.Component {
  state = {
    isOpen: false,
    selected: this.props.items[0].category || "Category",
  };

  renderList = () => {
    return this.props.items.map((item, index) => {
      return <Item key={index} item={item} selectItem={this.selectItem} />;
    });
  };

  toggleList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  selectItem = (itemName) => {
    this.props.selectCategory(itemName);
    this.toggleList();
  };

  render() {
    return (
      <div className="dd-wrapper">
        <div
          tabIndex={0}
          onKeyPress={this.toggleList}
          onClick={this.toggleList}
          role="button"
          className="dd-header"
        >
          <div className="dd-header-title">
            <div>{this.props.selected.category}</div>
          </div>
          <div className="dd-header_action">
            <div>
              {this.state.isOpen ? (
                <i className="far fa-caret-square-up"></i>
              ) : (
                <i className="far fa-caret-square-down"></i>
              )}
            </div>
          </div>
        </div>
        {this.state.isOpen && <ul className="dd-list">{this.renderList()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.selected };
};

export default connect(mapStateToProps, { selectCategory })(DropDown);
