import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { listItems } from "../../modules/item";

class List extends Component {
  static propTypes = {
    state: PropTypes.object,
    listItems: PropTypes.func
  };

  static defaultProps = {
    state: {
      data: []
    }
  };

  state = {};

  componentDidMount() {
    let id = sessionStorage.getItem("userIdDecrypted");
    const categoryId = this.props.id;
    if (id) {
      this.props.listItems("DESC", id, categoryId);
    } else {
      this.props.listItems("DESC", "", categoryId);
    }
  }

  render() {
    return (
      <div className="col-9">
        <div className="row">
          {this.props.state.items.data.map((item, i) => (
            <div key={i} className="col-4 my-15px">
              <Link
                to={`/items/${item.product_type.category_id}/${item.id}`}
                className="card card-item w-100"
              >
                {i <= 1 ? (
                  <div className="cat-tag-main cat-new-tag">
                    <p>New</p>
                  </div>
                ) : (
                  ""
                )}
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
                  <h6 className="card-title border-bottom pb-10px">
                    {item.name}
                  </h6>
                  <p className="card-text text-size-12">
                    Starting from{" "}
                    <b className="text-w600">Rp.{item.price_per_day}</b>
                    /month
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
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
      listItems
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(List);
