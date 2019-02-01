import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-container">
        <div className="search">
          <div className="container">
            <div className="row">
              <div className="col-1">
                <img src="/images/search.svg" alt="Search Icon" />
              </div>
              <div className="col-10">lalalal</div>
              <div className="col-1">
                <div className="btn-close" onClick={this.props.handle}>
                  <img src="/images/close.png" width="40vw" alt="Search Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter">
          <div className="container">
            <div className="row">
              <div className="col-12">lalalal</div>
            </div>
          </div>
        </div>
        <div className="result">
          <div className="container">
            <div className="row">
              <div className="col-12">lalalal</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
