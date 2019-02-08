import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";

import { listHistoriesByUserId, listHistories } from "../../modules/history";

class Schedule extends Component {
  static propTypes = {
    state: PropTypes.object,
    listHistoriesByUserId: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  state = {};

  componentDidMount() {
    let id = sessionStorage.getItem("userIdDecrypted");
    if (id) {
      this.props.listHistoriesByUserId(id);
    }
  }

  render() {
    const { data } = this.props.state.histories;
    return (
      <Row>
        <Col>
          <Card className="dashboard-empty-appointment">
            {data ? (
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Location</th>
                    <th>Item</th>
                    <th>Item</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.startDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <span className="far fa-calendar-check fa-3x" />
                <CardBody>
                  <CardTitle className="card-title">
                    You have no upcoming appointments
                  </CardTitle>
                  <CardText>
                    When you're ready, you can schedule one <a href="/">here</a>
                    .
                  </CardText>
                </CardBody>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}

const _state = state => ({
  state: {
    histories: state.histories.list
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      listHistoriesByUserId,
      listHistories
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(Schedule);
