import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";


import classnames from "classnames";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, activeTab: "1" };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggleModal}>
          text
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="lg">
          <ModalBody>
            <Nav tabs className="navTabs">
              <NavItem className="switchNav_Item">
                <NavLink
                  id="switchNav_Item_Active"
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Sign up
                </NavLink>
              </NavItem>
              <NavItem className="switchNav_Item">
                <NavLink
                  id="switchNav_Item_Active"
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="4" >
                    <img src="/images/rent_deals.png" class="rounded float-left" alt="rent"/>
                  </Col>
                  <Col sm="8">
                    <Form>
                      <FormGroup className="FormField">
                        <Input
                          type="text"
                          name="fullName"
                          id="exampleFullName"
                          placeholder="Full name"
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email Address"
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="number"
                          name="phoneNumber"
                          id="examplePhoneNumber"
                          placeholder="Phone Number"
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Create a Password"
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Confirm Password"
                        />
                      </FormGroup>
                      <Button>Sign up</Button>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="4" />
                  <Col sm="8">
                    <Form>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email Address"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <Button>Log in</Button>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Container;
