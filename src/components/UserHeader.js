import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

class AccountHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="navbar navbar-light bg-light navbar-fixed">
        <Link to="/">
          <div id="logo-navbar" className="logo" />
        </Link>
        <div className="navbar">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="btn-schedule-header" caret color="info">
              Username
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <a class="dropdown-item" href="/account">
                  My Stuff
                </a>
              </DropdownItem>
              <DropdownItem>
                <a class="dropdown-item" href="/account/details">
                  My Account
                </a>
              </DropdownItem>
              <DropdownItem>
                <a class="dropdown-item" href="/">
                  Log Out
                </a>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
    );
  }
}

export default AccountHeader;
