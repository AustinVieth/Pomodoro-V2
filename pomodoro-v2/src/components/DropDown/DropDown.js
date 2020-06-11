import React from "react";

import "./dropDown.css";

class DropDown extends React.Component {
  state = { isOpen: false, items: [], selection: [] };

  componentDidMount() {
    this.setState({ items: [...this.props.items] });
  }

  renderList = () => {
    return this.state.items.map((item) => {
      return (
        <li className="dd-item" key={item.id}>
          {item.title}
        </li>
      );
    });
  };

  toggleList = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
            <p>{this.props.header}</p>
          </div>
          <div className="dd-header_action">
            <p>{this.state.isOpen ? "Close" : "Open"}</p>
          </div>
        </div>
        {this.state.isOpen && <ul className="dd-list">{this.renderList()}</ul>}
      </div>
    );
  }
}

export default DropDown;
