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
import { listCategories } from "../modules/category";

import Sign from "./Sign";
import Search from "./Search";

class Header extends Component {
  static propTypes = {
    state: PropTypes.object,
    logout: PropTypes.func,
    push: PropTypes.func,
    listCategories: PropTypes.func
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
      "furniture.png",
      "electronics.png",
      "apparel.png",
      "vehicle.png",
      "appliances.png",
      "kids.png"
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

    this.props.listCategories();
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
    const { data } = this.props.state.category;

    let name = sessionStorage.getItem("userInfoDecrypted");
    if (name) {
      name = sessionStorage.getItem("userInfoDecrypted").split('"')[1];
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
                      {data.map((item, i) => (
                        <Link
                          key={i}
                          className="col-6 item-categorie d-flex justify-content-center align-items-center"
                          style={{ height: "100px" }}
                          to={{
                            pathname: `/items/${item.name}`,
                            state: { id: `${item.id}` }
                          }}
                        >
                          <div>
                            <img
                              src={`/images/cards-home/${
                                this.state.categories[i]
                              }`}
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
                        {name} <i className="fas fa-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        {/* <DropdownItem
                          onClick={() => {
                            this.props.push(
                              `${process.env.PUBLIC_URL}/user/profile`
                            );
                          }}
                        >
                          <div className="ml-10px d-flex align-items-center">
                            <i className="fas fa-user" />
                            <span className="ml-10px text-size-14">
                              Profile
                            </span>
                          </div>
                        </DropdownItem> */}
                        <DropdownItem
                          onClick={() => {
                            this.props.push(
                              `${process.env.PUBLIC_URL}/user/profile`
                            );
                          }}
                        >
                          <div className="ml-10px d-flex align-items-center">
                            <i className="fas fa-user" />
                            <span className="ml-10px text-size-14">
                              Profile
                            </span>
                          </div>
                        </DropdownItem>
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
                          <div className="ml-10px d-flex align-items-center">
                            <i className="fas fa-sign-out-alt" />
                            <span className="ml-10px text-size-14">
                              Sign Out
                            </span>
                          </div>
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
    login: state.login,
    category: state.category.list
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      logout,
      push,
      listCategories
    },
    dispatch
  );

export default connect(
  _state,
  _action
)(Header);
