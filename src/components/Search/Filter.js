import React, { Component } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "Furniture",
        "Electronic",
        "Apparel",
        "Vehicle",
        "Appliances",
        "Kid's"
      ],
      product_type: ["Smart Device", "Smartphone", "Laptops", "Tv"]
    };
  }
  render() {
    return (
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
                    isOpen={this.props.statusCategory}
                    toggle={this.props.handleCategory}
                  >
                    <DropdownToggle
                      tag="span"
                      onClick={this.props.handleCategory}
                      data-toggle="dropdown"
                      aria-expanded={this.props.statusCategory}
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
                    isOpen={this.props.statusProduct}
                    toggle={this.props.handleProduct}
                  >
                    <DropdownToggle
                      tag="span"
                      onClick={this.props.handleProduct}
                      data-toggle="dropdown"
                      aria-expanded={this.props.statusProduct}
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
    );
  }
}

export default Filter;
