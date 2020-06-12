import React from "react";

import "./dropDown.css";
import Item from "./Item";

class DropDown extends React.Component {
  state = {
    isOpen: false,
    items: [...this.props.items],
    selection: [],
    selected: this.props.items[0].title || "Category",
  };

  componentDidMount() {
    // this.setState({ items: [...this.props.items] });
  }

  renderList = () => {
    return this.state.items.map((item) => {
      return <Item key={item.id} item={item} selectItem={this.selectItem} />;
    });
  };

  toggleList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  selectItem = (itemId) => {
    this.setState({
      selected: this.state.items.filter((item) => item.id === itemId)[0].title,
    });
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
            <div>{this.state.selected}</div>
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

export default DropDown;
