import React, { Component } from "react";

class List extends Component {
  state = {
    newItems: [
      {
        image: "lenovo.jpg",
        name: "Lenovo Ideapad 330",
        price: "349000"
      },
      {
        image: "honda.jpg",
        name: "Honda Dio 110",
        price: "599000"
      },
      {
        image: "bajaj.jpg",
        name: "Bajaj Dominar 400 ABS",
        price: "1499000"
      },
      {
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
              <div className="card card-item w-100">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
