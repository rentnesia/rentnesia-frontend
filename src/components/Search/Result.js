import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { listItems, getItemById } from "../../modules/item";

class Result extends Component {
  static propTypes = {
    state: PropTypes.object,
    listItems: PropTypes.func,
    getItemById: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.listItems("DESC");
  }

  render() {
    return (
      <div className="result">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.data.length > 0 ? (
                <div>
                  <h5 className="text-normal">Result</h5>
                  <div className="small-border-left" />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row my-30px">
            {this.props.data.map((item, i) => (
              <div key={i} className="col-3">
                {/* {console.log(item)} */}
                <Link
                  to={`/items/${item.product_type.category_id}/${item.id}`}
                  className="card w-100 my-15px"
                  onClick={() => {
                    this.props.handle();
                    this.props.getItemById(item.id);
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "150px", maxHeight: "150px" }}
                  >
                    <div className="card-img-top-parent">
                      <img
                        src={`${item.picture}`}
                        className="card-img-top"
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text text-size-12">
                      Starting from{" "}
                      <b className="text-w600">Rp.{`${item.price_per_day}`}</b>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const _state = state => ({
  state: {}
});
const _action = dispatch =>
  bindActionCreators(
    {
      listItems,
      getItemById
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(Result);
