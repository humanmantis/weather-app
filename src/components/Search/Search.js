import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    searchValue: "",
  };

  // change searcValue in state from input
  handleChange = (event) => {
    const { value } = event.target;
    this.setState((state) => ({ ...state, searchValue: value }));
  };

  // run search
  searchRequest = () => {
    this.props.searchRequest(this.state.searchValue);
  };

  // search by press Enter
  handleKeyPress = (event) => {
    const { key } = event;
    if (key === "Enter") this.searchRequest();
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search-panel">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button
            className="search-btn"
            onClick={this.searchRequest}
            disabled={searchValue.length === 0}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
