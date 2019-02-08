import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { listCategories } from "../../modules/category";

class CardsMenu extends Component {
  static propTypes = {
    state: PropTypes.object,
    listCategories: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      category: [
        "furniture.png",
        "electronics.png",
        "vehicle.png",
        "apparel.png",
        "appliances.png",
        "kids.png"
      ]
    };
  }

  componentDidMount() {
    this.props.listCategories();
  }

  render() {
    const { data } = this.props.state.category;

    return (
      <div className="cards-menu">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <Link
                key={i}
                to={{
                  pathname: `/items/${item.name}`,
                  state: { id: `${item.id}` }
                }}
                className="card text-center"
              >
                <div
                  className="card-body"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <h6 className="card-title">{item.name}</h6>
                  <div className="small-border" />
                  <img
                    src={`/images/cards-home/${this.state.category[i]}`}
                    height="80vw"
                    className="mt-10px"
                    alt={item.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const _state = state => ({
  state: {
    category: state.category.list
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      listCategories
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(CardsMenu);
