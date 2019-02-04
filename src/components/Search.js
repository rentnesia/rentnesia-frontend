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
        { image: "furniture.png", name: "Furniture" },
        { image: "electronics.png", name: "Electronic" },
        { image: "apparel.png", name: "Apparel" },
        { image: "vehicle.png", name: "Vehicle" },
        { image: "appliances.png", name: "Appliances" },
        { image: "kids.png", name: "Kid's" }
      ],
      newItems: [
        {
          image: "lenovo.jpg",
          name: "Lenovo Ideapad 330",
          price: "349000"
        },
        {
          image: "honda.jpg",
          name: "Honda Dio 110",
          price: "599000"
        },
        {
          image: "bajaj.jpg",
          name: "Bajaj Dominar 400 ABS",
          price: "1499000"
        },
        {
          image: "macbook.jpg",
          name: "Macbook Pro 2018",
          price: "899000"
        }
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
      <div className={`search-container ${this.props.status ? "active" : ""}`}>
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
                          <DropdownItem key={i}>{categorie.name}</DropdownItem>
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
              <div className="col-12">
                <h5 className="text-normal">Newly Launched</h5>
                <div className="small-border-left" />
              </div>
            </div>
            <div className="row my-30px">
              {this.state.newItems.map((item, i) => (
                <div key={i} className="col-3">
                  <div className="card w-100">
                    <img
                      src={`/images/items/${item.image}`}
                      className="card-img-top"
                      alt={item.name}
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title">{item.name}</h6>
                      <p className="card-text text-size-12">
                        Starting from{" "}
                        <b className="text-w600">Rp.{item.price}</b>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
