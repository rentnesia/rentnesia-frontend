import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { goBack } from "connected-react-router";
import PropTypes from "prop-types";

import Shell from "../components/Shell";

class SelectedItem extends Component {
  static propTypes = {
    state: PropTypes.object,
    goBack: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  state = {
    item: {
      image: "macbook.jpg",
      owner_img: "gibran.png",
      owner: "Gibran",
      name: "MacBook 2018",
      category: "Electronic",
      product_type: "Laptop",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur distinctio ex vero non dolore. Consequatur dolorum corporis optio fugit hic. Consequuntur distinctio ex vero non dolore. Consequatur dolorum corporis optio fugit hic. Consequuntur distinctio ex vero non dolore. Consequatur dolorum corporis optio fugit hic.",
      price_per_day: 200,
      disc_week: 10,
      disc_month: 22
    },
    location: null,
    startDate: null,
    endDate: null
  };

  handleGoBack = () => {
    this.props.goBack();
  };
  render() {
    // const itemId = this.props.match.params.itemId;
    const item = this.state.item;

    return (
      <Shell>
        <div className="selected-item">
          <div className="container">
            <div className="row my-30px">
              <div className="col-3">
                <div className="navigation">
                  <div
                    className="d-flex align-items-center"
                    onClick={this.handleGoBack}
                  >
                    <i className="fas fa-chevron-left" />
                    <span className="text-size-14 ml-20px">
                      Back to Categories
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20px">
              <div className="col-7">
                <img
                  className="img-item"
                  src={`/images/${item.image}`}
                  alt={item.name}
                />
                {/* <div className="row mt-20px">
                  <div className="col-2">
                    <img
                      src={`/images/testimonials/${item.owner_img}`}
                      className="img-owner"
                      alt={item.owner}
                    />
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <div>
                      <h6 className="mb-1px">Gibran</h6>
                      <span className="text-size-14">45 items for rent</span>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-4 offset-1">
                <h3 className="mb-5px">{item.name}</h3>
                <h6 className="text-normal mt-0px">
                  {item.category}{" "}
                  <i className="fas fa-chevron-right text-size-14 mx-5px" />{" "}
                  {item.product_type}
                </h6>
                <div className="row my-40px">
                  <div className="col-4">
                    <h6 style={{ marginBottom: "-3px" }}>
                      IDR {item.price_per_day}K
                    </h6>
                    <span className="text-size-13 text-w500 color-grey">
                      per day
                    </span>
                  </div>
                  <div className="col-4">
                    <h6 style={{ marginBottom: "-3px" }}>-{item.disc_week}%</h6>
                    <span className="text-size-13 text-w500 color-grey">
                      7+ days
                    </span>
                  </div>
                  <div className="col-4">
                    <h6 style={{ marginBottom: "-3px" }}>
                      -{item.disc_month}%
                    </h6>
                    <span className="text-size-13 text-w500 color-grey">
                      28+ days
                    </span>
                  </div>
                </div>
                <p className="border-bottom pb-25px">{item.desc}</p>
                <form>
                  <div class="form-group">
                    <label htmlFor="location">Location</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        id="location"
                        aria-describedby="location"
                        placeholder="Location"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label htmlFor="location">Dates</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        id="dates"
                        aria-describedby="location"
                        placeholder="Dates"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-animate btn-animate-vertical btn-danger"
                  >
                    <span>
                      RENT NOW
                      <i
                        className="icon fas fa-truck-moving"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

const _state = state => ({
  state: {}
});
const _action = dispatch =>
  bindActionCreators(
    {
      goBack
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(SelectedItem);
