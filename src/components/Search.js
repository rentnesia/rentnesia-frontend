import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      dropdownCategory: false,
      dropdownProduct: false,
      categories: [
        "Furniture",
        "Electronic",
        "Apparel",
        "Vehicle",
        "Appliances",
        "Kid's"
      ],
      product_type: ["Smart Device", "Smartphone", "Laptops", "Tv"],
      newItems: [
        {
          id: 1,
          image: "lenovo.jpg",
          category: "Electronic",
          name: "Lenovo Ideapad 330",
          price: "349000"
        },
        {
          id: 2,
          image: "honda.jpg",
          category: "Vehicle",
          name: "Honda Dio 110",
          price: "599000"
        },
        {
          id: 3,
          image: "bajaj.jpg",
          category: "Vehicle",
          name: "Bajaj Dominar 400 ABS",
          price: "1499000"
        },
        {
          id: 4,
          image: "macbook.jpg",
          category: "Electronic",
          name: "Macbook Pro 2018",
          price: "899000"
        }
      ]
    };
  }

  handleCategory = () => {
    this.setState({
      dropdownCategory: !this.state.dropdownCategory
    });
  };
  handleProduct = () => {
    this.setState({
      dropdownProduct: !this.state.dropdownProduct
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
                      isOpen={this.state.dropdownCategory}
                      toggle={this.handleCategory}
                    >
                      <DropdownToggle
                        tag="span"
                        onClick={this.handleCategory}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownCategory}
                        className="nav-link pointer"
                      >
                        Category <i className="fas fa-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.categories.map((categorie, i) => (
                          <DropdownItem key={i}>
                            <span className="ml-5px">{categorie}</span>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown
                      isOpen={this.state.dropdownProduct}
                      toggle={this.handleProduct}
                    >
                      <DropdownToggle
                        tag="span"
                        onClick={this.handleProduct}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownProduct}
                        className="nav-link pointer"
                      >
                        Product Type <i className="fas fa-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.product_type.map((type, i) => (
                          <DropdownItem key={i}>
                            <span className="ml-5px">{type}</span>
                          </DropdownItem>
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
                  <Link
                    to={`/items/${item.category}/${item.id}`}
                    className="card w-100"
                    onClick={this.props.handle}
                  >
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
                  </Link>
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
