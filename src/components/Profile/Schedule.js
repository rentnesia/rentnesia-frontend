import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";
import dateFns from "date-fns";

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
            <CardBody>
              <CardTitle className="card-title-items pb-10px">
                History Item
              </CardTitle>
              {data ? (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="50px">No.</th>
                      <th>Item</th>
                      <th>StartDate</th>
                      <th>EndDate</th>
                      <th>Location</th>
                      <th>Renter</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="table-history">
                    {data.map((item, i) => (
                      <tr key={i}>
                        <td width="50px">{i + 1}</td>
                        <td>{item.item.name}</td>
                        <td>{dateFns.format(item.startDate, "DD/MMM/YYYY")}</td>
                        <td>{dateFns.format(item.endDate, "DD/MMM/YYYY")}</td>
                        <td>{item.location || "Not Set"}</td>
                        <td>{item.user.first_name}</td>
                        <td>
                          <span
                            className={`badge badge-${
                              item.status === "success"
                                ? item.status === "waiting"
                                  ? "warning"
                                  : "success"
                                : "danger"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>
                  <span className="far fa-calendar-check fa-3x" />
                  <CardTitle className="card-title">
                    You have no upcoming appointments
                  </CardTitle>
                  <CardText>
                    When you're ready, you can schedule one <a href="/">here</a>
                    .
                  </CardText>
                </div>
              )}
            </CardBody>
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
