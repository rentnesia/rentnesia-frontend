import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";

class UserSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="dashboard-empty-appointment">
              <span className="far fa-calendar-check fa-3x" />
              <CardBody>
                <CardTitle className="card-title">
                  You have no upcoming appointments
                </CardTitle>
                <CardText>
                  When you're ready, you can schedule one <a href="/">here</a>.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="dashboard-empty-items">
              <CardBody>
                <CardTitle className="card-title-items">
                  Your Items (0)
                </CardTitle>
                <CardImg
                  className="dashboard-empty-items-img"
                  src="/images/schedule-img-items.png"
                />
                <CardText>
                  You have no items in storage. Schedule an appointment and let
                  us do the work for you.
                </CardText>
                <Button color="success" className="btn-schedule">
                  Schedule Appointment
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserSchedule;
