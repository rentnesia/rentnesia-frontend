import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { goBack } from "connected-react-router";
import PropTypes from "prop-types";
// import t from "typy";

import Shell from "../components/Shell";

import { getItemById } from "../modules/item";

class SelectedItem extends Component {
  static propTypes = {
    state: PropTypes.object,
    goBack: PropTypes.func,
    getItemById: PropTypes.func
  };

  static defaultProps = {
    state: {},
    detail: { data: [] }
  };

  state = {
    location: null,
    startDate: null,
    endDate: null,
    disc_week: 10,
    disc_month: 22
  };

  componentDidMount() {
    const itemId = this.props.match.params.itemId;
    this.props.getItemById(itemId);
  }

  handleGoBack = params => {
    console.log(params);
    // this.props.goBack(`${process.env.PUBLIC_URL}/items/${category}`);
  };

  render() {
    const data = this.props.state.detail.data;

    return (
      <Shell>
        {data.map(item => (
          <div key={item.id} className="selected-item">
            <div className="container">
              <div className="row my-30px">
                <div className="col-3">
                  <Link
                    to={{
                      pathname: `/items/${item.product_type.category.name}`,
                      state: { id: `${item.product_type.category_id}` }
                    }}
                    className="d-flex align-items-center navigation"
                  >
                    <i className="fas fa-chevron-left" />
                    <span className="text-size-14 ml-20px">
                      Back to Categories
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row mt-20px">
                <div className="col-7">
                  <img
                    className="img-item"
                    src={`/images/${item.picture}`}
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
                    {item.product_type.category.name.toUpperCase()}{" "}
                    <i className="fas fa-chevron-right text-size-14 mx-5px" />{" "}
                    {item.product_type.name.toUpperCase()}
                  </h6>
                  <div className="row my-40px">
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        IDR {item.price_per_day}
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        per day
                      </span>
                    </div>
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        -{this.state.disc_week}%
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        7+ days
                      </span>
                    </div>
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        -{this.state.disc_month}%
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        28+ days
                      </span>
                    </div>
                  </div>
                  <p className="border-bottom pb-25px">{item.description}</p>
                  <form>
                    <div className="form-group">
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
                    <div className="form-group">
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
        ))}
      </Shell>
    );
  }
}

const _state = state => ({
  state: {
    detail: state.item.detail
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      goBack,
      getItemById
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(SelectedItem);
