/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import $ from "jquery";

import { Link } from "react-router-dom";

class Header extends Component {
  static propTypes = {
    state: PropTypes.object
  };

  static defaultProps = {
    state: {},
    children: null
  };

  componentDidMount() {
    $(window).scroll(() => {
      const navbar = $("#main-navbar");
      const logoNav = $("#logo-absolute");
      if ($(window).scrollTop() >= 1) {
        navbar.removeClass("navbar-absolute").addClass("navbar-fixed");
        logoNav.removeClass("logo").addClass("logo-white");
      } else {
        navbar.removeClass("navbar-fixed").addClass("navbar-absolute");
        logoNav.removeClass("logo-white").addClass("logo");
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-absolute" id="main-navbar">
        <div className="container">
          <Link to="#">
            <div id="logo-navbar" className="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="menu-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  CATEGORIES <i className="fas fa-chevron-down" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <h6 className="fas fa-search" aria-hidden="true" />
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <h6 className="fas fa-shopping-cart" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item mr-0">
                <Link
                  to="#"
                  className="btn btn-sm btn-animate btn-animate-side-right btn-transparent-danger secondary btn-login"
                >
                  <span>
                    LOGIN
                    <i className="icon fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="btn btn-sm btn-animate btn-animate-side-right btn-danger btn-join"
                >
                  <span>
                    SIGNUP
                    <i className="icon fas fa-sign-in-alt" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
