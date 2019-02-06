import React, { Component } from "react";
import { Link } from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItems: [
        {
          id: 1,
          image: "lenovo.jpg",
          category: "Electronic",
          name: "Lenovo Ideapad 330",
          price: "349000"
        },
        {
          id: 2,
          image: "honda.jpg",
          category: "Vehicle",
          name: "Honda Dio 110",
          price: "599000"
        },
        {
          id: 3,
          image: "bajaj.jpg",
          category: "Vehicle",
          name: "Bajaj Dominar 400 ABS",
          price: "1499000"
        },
        {
          id: 4,
          image: "macbook.jpg",
          category: "Electronic",
          name: "Macbook Pro 2018",
          price: "899000"
        }
      ]
    };
  }

  render() {
    return (
      <div className="result">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-normal">Newly Launched</h5>
              <div className="small-border-left" />
            </div>
          </div>
          <div className="row my-30px">
            {this.state.newItems.map((item, i) => (
              <div key={i} className="col-3">
                <Link
                  to={`/items/${item.category}/${item.id}`}
                  className="card w-100"
                  onClick={this.props.handle}
                >
                  <img
                    src={`/images/items/${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text text-size-12">
                      Starting from <b className="text-w600">Rp.{item.price}</b>
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

export default Result;
