/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import $ from "jquery";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link } from "react-router-dom";

import Sign from "./Sign";
import Search from "./Search";

class Header extends Component {
  static propTypes = {
    state: PropTypes.object
  };

  static defaultProps = {
    state: {}
  };

  state = {
    modal: false,
    dropdownOpen: false,
    search: false,
    categories: [
      { image: "furniture.png", name: "Furniture" },
      { image: "electronics.png", name: "Electronic" },
      { image: "apparel.png", name: "Apparel" },
      { image: "vehicle.png", name: "Vehicle" },
      { image: "appliances.png", name: "Appliances" },
      { image: "kids.png", name: "Kid's" }
    ]
  };

  componentDidMount() {
    $(window).scroll(() => {
      const navbar = $("#main-navbar");
      const logoNav = $("#logo-navbar");
      if ($(window).scrollTop() >= 1) {
        navbar.removeClass("navbar-absolute").addClass("navbar-fixed");
        logoNav.removeClass("logo").addClass("logo-primary");
      } else {
        navbar.removeClass("navbar-fixed").addClass("navbar-absolute");
        logoNav.removeClass("logo-primary").addClass("logo");
      }
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSearch = () => {
    this.setState({
      search: !this.state.search
    });
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-absolute"
          id="main-navbar"
        >
          <div className="container">
            <Link to="/#home-carousel">
              <div id="logo-navbar" className="logo" />
            </Link>
            <div className="collapse navbar-collapse" id="menu-navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggleDropdown}
                  >
                    <DropdownToggle
                      tag="span"
                      onClick={this.toggleDropdown}
                      className="nav-link"
                    >
                      CATEGORIES <i className="fas fa-chevron-down" />
                    </DropdownToggle>
                    <DropdownMenu className="row categories-header text-center">
                      {this.state.categories.map((item, i) => (
                        <div
                          key={i}
                          className="col-6 item-categorie d-flex justify-content-center align-items-center"
                          style={{ height: "100px" }}
                        >
                          <div>
                            <img
                              src={`/images/cards-home/${item.image}`}
                              height="35px"
                              alt={item.name}
                            />
                            <h6 className="my-10px">{item.name}</h6>
                          </div>
                        </div>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={this.handleSearch}>
                    <h6 className="fas fa-search" aria-hidden="true" />
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <h6 className="fas fa-shopping-cart" aria-hidden="true" />
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.toggleModal}
                    className="btn btn-sm btn-animate btn-animate-side-right btn-danger btn-join"
                  >
                    <span>
                      SIGN
                      <i
                        className="icon fas fa-sign-in-alt"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Sign toggle={this.toggleModal} status={this.state.modal} />
        {this.state.search ? <Search handle={this.handleSearch} /> : ""}
      </div>
    );
  }
}

const _state = state => ({
  state: {}
});
const _action = dispatch => bindActionCreators({}, dispatch);

export default connect(
  _state,
  _action
)(Header);
