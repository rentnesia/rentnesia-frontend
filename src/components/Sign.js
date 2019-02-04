import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

import classnames from "classnames";

import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }

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
        <Modal
          isOpen={this.props.status}
          toggle={this.props.toggle}
          size="lg"
          centered
        >
          <ModalBody>
            <div className="btn-close">
              <img
                src="/images/close.png"
                className="icon-close"
                alt="btn-close"
                onClick={this.props.toggle}
              />
            </div>
            <Row>
              <Col sm="4" className="left-container text-center">
                <img
                  src="/images/login-container.svg"
                  alt="Login Container"
                  width="100%"
                />
              </Col>
              <Col sm="8" className="right-container">
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
                      <div className="small-border-section" />
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
                      Sign In
                      <div className="small-border-section" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <SignUp toggle={this.props.toggle} />
                  </TabPane>
                  <TabPane tabId="2">
                    <SignIn toggle={this.props.toggle} />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Sign;
