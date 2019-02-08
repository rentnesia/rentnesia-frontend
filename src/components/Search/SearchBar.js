import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <img src="/images/search.svg" alt="Search Icon" />
            </div>
            <div className="col-10">
              <div className="md-form form-lg">
                <div className="prefix w-100" style={{ top: "0" }}>
                  <input
                    className="form-control form-control-lg search-input"
                    type="text"
                    placeholder="Search starting here..."
                    onKeyUp={this.props.handleSearch}
                  />
                </div>
              </div>
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
              <div className="btn-close" onClick={this.props.handle}>
                <img src="/images/close.png" width="40vw" alt="Search Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
