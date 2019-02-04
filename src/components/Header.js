/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";
import { message } from "antd";
import $ from "jquery";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

import { logout } from "../modules/login";

import Sign from "./Sign";
import Search from "./Search";

class Header extends Component {
  static propTypes = {
    state: PropTypes.object,
    logout: PropTypes.func,
    push: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  state = {
    modal: false,
    dropdownUser: false,
    dropdownCategory: false,
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

  toggleDropdownCategory = () => {
    this.setState({
      dropdownCategory: !this.state.dropdownCategory
    });
  };

  toggleDropdownUser = () => {
    this.setState({
      dropdownUser: !this.state.dropdownUser
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
    const { login } = this.props.state.login;

    let name;
    if (sessionStorage.getItem("userInfoDecrypted")) {
      name = sessionStorage.getItem("userInfoDecrypted").split('"')[1];
    } else {
      name = this.props.state.login.name;
    }

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
                    isOpen={this.state.dropdownCategory}
                    toggle={this.toggleDropdownCategory}
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
                        <Link
                          key={i}
                          className="col-6 item-categorie d-flex justify-content-center align-items-center"
                          style={{ height: "100px" }}
                          to={`/items/${item.name}`}
                          params={{ name: item.name }}
                        >
                          <div>
                            <img
                              src={`/images/cards-home/${item.image}`}
                              height="35px"
                              alt={item.name}
                            />
                            <h6 className="my-10px">{item.name}</h6>
                          </div>
                        </Link>
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
                  {login ? (
                    <Dropdown
                      isOpen={this.state.dropdownUser}
                      toggle={this.toggleDropdownUser}
                    >
                      <DropdownToggle
                        tag="span"
                        onClick={this.dropdownUser}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownUser}
                        className="nav-link"
                      >
                        {name.toUpperCase()}{" "}
                        <i className="fas fa-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => {
                            message.loading("Mohon Tunggu");
                            setTimeout(() => {
                              message.success("Berhasil Logout");
                              this.props.logout();
                              this.props.push(`${process.env.PUBLIC_URL}/`);
                            }, 2000);
                          }}
                        >
                          <span className="ml-5px">Log Out</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
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
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Sign toggle={this.toggleModal} status={this.state.modal} />
        {/* {this.state.search ? <Search handle={this.handleSearch} /> : ""} */}
        <Search handle={this.handleSearch} status={this.state.search} />
      </div>
    );
  }
}

const _state = state => ({
  state: {
    login: state.login
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      logout,
      push
    },
    dispatch
  );

export default connect(
  _state,
  _action
)(Header);
