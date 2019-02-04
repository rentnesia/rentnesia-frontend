import React, { Component } from "react";
import { Form, FormGroup, Input, Row, Col, Label } from "reactstrap";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      location: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="account-details">
        <div className="account-details-avatar">
          <div className="account-avatar">
            <div className="account-avatar-image">
              <span className="far fa-user-circle fa-7x" />
              <div className="account-avatar-edit">
                <span className="far fa-edit fa-2x" />
              </div>
            </div>
          </div>
        </div>

        <Row className="form-profile justify-content-center">
          <Col md="8">
            <Form onSubmit={this.handleSubmit} className="formContainer">
              <div className="row">
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="first_name">First name</Label>
                    <Input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </div>
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="last_name">Last name</Label>
                    <Input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="user_name">Username</Label>
                    <Input
                      type="text"
                      name="user_name"
                      placeholder="Username"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </div>
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </FormGroup>
                </div>
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={this.handleChange}
                      value={this.state.phoneNumber}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <FormGroup className="FormField">
                    <Label for="location">Location</Label>
                    <Input
                      type="textarea"
                      name="location"
                      placeholder="Location"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <button
                    className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                    disabled={
                      this.state.password !== this.state.confirmPassword ||
                      this.state.first_name.length <= 1 ||
                      this.state.last_name.length <= 1 ||
                      this.state.email.length <= 1 ||
                      this.state.phoneNumber.length <= 1 ||
                      this.state.password.length < 1 ||
                      this.state.confirmPassword.length < 1
                    }
                    type="submit"
                  >
                    <span>
                      Save Profile
                      <i
                        className="icon fas fa-arrow-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
