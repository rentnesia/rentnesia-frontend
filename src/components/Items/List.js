import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    newItems: [
      {
        id: 1,
        image: "lenovo.jpg",
        name: "Lenovo Ideapad 330",
        price: "349000"
      },
      {
        id: 2,
        image: "honda.jpg",
        name: "Honda Dio 110",
        price: "599000"
      },
      {
        id: 3,
        image: "bajaj.jpg",
        name: "Bajaj Dominar 400 ABS",
        price: "1499000"
      },
      {
        id: 4,
        image: "macbook.jpg",
        name: "Macbook Pro 2018",
        price: "899000"
      }
    ]
  };
  render() {
    return (
      <div className="col-9">
        <div className="row">
          {this.state.newItems.map((item, i) => (
            <div key={i} className="col-4 my-15px">
              <Link
                to={`/items/${this.props.category}/${item.id}`}
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
                  src={`/images/items/${item.image}`}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h6 className="card-title border-bottom pb-10px">
                    {item.name}
                  </h6>
                  <p className="card-text text-size-12">
                    Starting from <b className="text-w600">Rp.{item.price}</b>
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

export default List;
