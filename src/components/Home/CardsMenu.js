import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { image: "furniture.png", name: "Furniture" },
        { image: "electronics.png", name: "Electronic" },
        { image: "apparel.png", name: "Apparel" },
        { image: "vehicle.png", name: "Vehicle" },
        { image: "appliances.png", name: "Appliances" },
        { image: "kids.png", name: "Kid's" }
      ]
    };
  }
  render() {
    return (
      <div className="cards-menu">
        <div className="container">
          <div className="row">
            {this.state.cards.map((card, i) => (
              <Link
                key={i}
                to={`/items/${card.name}`}
                className="card text-center"
              >
                <div
                  className="card-body"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <h6 className="card-title">{card.name}</h6>
                  <div className="small-border" />
                  <img
                    src={`/images/cards-home/${card.image}`}
                    height="80vw"
                    className="mt-10px"
                    alt={card.name}
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

export default CardsMenu;
