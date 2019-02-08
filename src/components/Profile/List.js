import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col
} from "reactstrap";

import { listItemByUsers } from "../../modules/item";

import AddItem from "./AddItem";

class List extends Component {
  static propTypes = {
    state: PropTypes.object,
    getUserById: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    let id = sessionStorage.getItem("userIdDecrypted");
    if (id) {
      this.props.listItemByUsers(id);
    }
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { data, total } = this.props.state.items;
    // console.log(data);
    return (
      <div>
        <Row>
          <Col>
            <Card className="dashboard-empty-items">
              <CardBody>
                <CardTitle className="card-title-items">
                  <span>Your Items ({total})</span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={this.toggleModal}
                  >
                    Add Item
                  </button>
                </CardTitle>
                {data ? (
                  <div className="row">
                    {data.map((item, i) => (
                      <div key={i} className="col-3 my-15px">
                        <Link
                          to={`/items/${item.product_type.category_id}/${
                            item.id
                          }`}
                          className="card card-item w-100"
                        >
                          {i <= 1 ? (
                            <div className="cat-tag-main cat-new-tag">
                              <p>New</p>
                            </div>
                          ) : (
                            ""
                          )}
                          <img
                            src={`/images/items/${item.picture}`}
                            className="card-img-top"
                            alt={item.name}
                          />
                          <div className="card-body text-center">
                            <h6 className="card-title border-bottom pb-10px">
                              {item.name}
                            </h6>
                            <p className="card-text text-size-12">
                              Starting from{" "}
                              <b className="text-w600">
                                Rp.{item.price_per_day}
                              </b>
                              /month
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <CardImg
                      className="dashboard-empty-items-img"
                      src="/images/schedule.svg"
                    />
                    <CardText className="mt-20px">
                      You have no items in storage. Schedule an appointment and
                      let us do the work for you.
                    </CardText>
                    <button className="btn btn-animate btn-animate-vertical btn-danger">
                      <span>
                        SCHEDULE APPOINTMENT
                        <i
                          className="icon fas fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <AddItem toggle={this.toggleModal} status={this.state.modal} />
      </div>
    );
  }
}
const _state = state => ({
  state: {
    items: state.item.list
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      listItemByUsers
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(List);
