import React, { Component } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      categories: [
        "Furniture",
        "Electronic",
        "Apparel",
        "Vehicle",
        "Appliances",
        "Kid's"
      ]
    };
  }

  handleCategory = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <div className="search-container">
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
        <div className="filter">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="navbar-nav filter-nav">
                  <li className="nav-item">
                    <span className="nav-link">Browse By</span>
                  </li>
                  <li className="nav-item">
                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.handleCategory}
                    >
                      <DropdownToggle
                        tag="span"
                        onClick={this.handleCategory}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                        className="nav-link pointer"
                      >
                        Category <i className="fas fa-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.categories.map((categorie, i) => (
                          <DropdownItem>{categorie}</DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="result">
          <div className="container">
            <div className="row">
              <div className="col-12 item-newest">
                <h1>sakdaslkdj</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
