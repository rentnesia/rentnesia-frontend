import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { message } from "antd";
import { Form, Input } from "reactstrap";

import { createUsers, setForm } from "../../modules/user";

class SignIn extends Component {
  static propTypes = {
    state: PropTypes.object,
    createUsers: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  state = {
    confirmPassword: "",
    user_type: "customer"
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      username,
      email,
      password
    } = this.props.state.users.create.form;
    if (first_name.length <= 0) {
      message.error("First Name wajib diisi!");
    } else if (last_name.length <= 0) {
      message.error("Last Name wajib diisi!");
    } else if (username.length <= 0) {
      message.error("Username wajib diisi!");
    } else if (email.length <= 0) {
      message.error("Email wajib diisi!");
    } else if (password.length <= 0) {
      message.error("Password wajib diisi!");
    } else if (password.length < 8) {
      message.error("Password minimal 8 karakter!");
    } else if (password !== this.state.confirmPassword) {
      message.error("Password tidak sama!");
    } else {
      this.props.createUsers(this.props.state.users.create.form);
      await this.props.toggle();
    }
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.props.setForm(name, value);
  };

  handleConfirmPasswordChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { pending } = this.props.state.users.create;
    const icon = <i className="fas fa-circle-o-notch fa-spin" />;

    return (
      <Form onSubmit={this.handleSubmit} className="formContainer">
        <div className="row">
          <div className="col-6">
            <div className="md-form">
              <Input
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="md-form">
              <Input
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="md-form" style={{ marginTop: "-5px" }}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="md-form">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="md-form">
          <Input
            type="password"
            name="password"
            placeholder="Create a Password"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="md-form">
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.handleConfirmPasswordChange}
          />
        </div>
        <small>
          By signing up, you agree to Rentnesia{" "}
          <b>Terms and Conditions & Privacy Policy</b>
        </small>
        <button
          className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
          disabled={pending}
          type="submit"
        >
          {pending ? (
            icon
          ) : (
            <span>
              SIGN UP
              <i className="icon fas fa-arrow-right" aria-hidden="true" />
            </span>
          )}
        </button>
      </Form>
    );
  }
}

const _state = state => ({
  state: {
    users: state.user
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      createUsers,
      setForm
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(SignIn);
