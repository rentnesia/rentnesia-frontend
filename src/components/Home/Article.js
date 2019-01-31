import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Why Rentals are a lifestyle choice",
          short_title: "Why Rentals",
          id: "why-rentals",
          icon: "question",
          data: [
            {
              title: "Rent to Own or Return anytime",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            },
            {
              title: "Pay Rentals cheaper than EMI",
              desc:
                "Since we buy directly from manufacturers at substantially lower prices, our rentals turn out to be cheaper than EMIs for all tenures. Ensuring you more savings!",
              image: "test.svg"
            },
            {
              title: "Save Huge Capital Commitment",
              desc:
                "Why spend on products that lose up to 50% of its value the moment you purchase it? Renting gives you an opportunity to invest that money on experiences or places where you can get high returns.",
              image: "test.svg"
            }
          ]
        },
        {
          title: "Additional Benefits",
          short_title: "Benefits",
          icon: "gift",
          id: "benefits",
          data: [
            {
              title: "Free Relocation",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            },
            {
              title: "Product Swaps",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            },
            {
              title: "Free Maintenance",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            }
          ]
        },
        {
          title: "What Our Process",
          short_title: "Processes",
          icon: "lightbulb",
          id: "processes",
          data: [
            {
              title: "Free Relocation",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            },
            {
              title: "Product Swaps",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            },
            {
              title: "Free Maintenance",
              desc:
                "We all understand test drive ! how about a flexiblity of an extended test drive where you can rent the product for givenmonths and then choose to either buy or return at yourconvenience.",
              image: "test.svg"
            }
          ]
        }
      ],
      swap: ["white", "w-grey", "white", "black"],
      scrollspyParent: ["why-rentals", "benefits", "processes"]
    };
  }

  componentDidMount() {
    $(window).scroll(() => {
      const scrollspy = $("#scrollspy");
      let innerHeight = $(window).innerHeight();
      if (
        $(window).scrollTop() >= innerHeight * 1.02 &&
        $(window).scrollTop() < innerHeight * 6.2
      ) {
        scrollspy.addClass("fixed");
      } else {
        scrollspy.removeClass("fixed");
      }
    });
  }

  render() {
    return (
      <div className="article-section pt-100px">
        <div className="scrollspy-header" id="scrollspy">
          <Scrollspy
            className="scrollspy-custom"
            items={this.state.scrollspyParent}
            currentClassName="active"
            offset={-180}
          >
            {this.state.articles.map((article, i) => (
              <li key={i}>
                <AnchorLink href={`#${article.id}`}>
                  <i className={`fas fa-${article.icon} mr-10px`} />
                  {article.short_title}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </div>
        <div className="pt-80px" />
        {this.state.articles.map((article, x) => {
          return (
            <div key={x} id={article.id} className="article">
              <div className={`swap-${this.state.swap[x]}`} />
              <div className={`background-${this.state.swap[x]}`}>
                <div className="container">
                  <div className="w-100 text-center header-section">
                    <h3>{article.title}</h3>
                    <div className="small-border-section" />
                  </div>
                  {article.data.map((item, i) => {
                    if (i % 2 === 0) {
                      return (
                        <div key={i} id={item.title} className="row mt-50px">
                          <div className="col-6 pr-60px d-flex align-items-center">
                            <div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                            <img
                              src={`/images/article/${item.image}`}
                              className="w-50"
                              alt={item.title}
                            />
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={i} className="row mt-50px">
                          <div className="col-6 d-flex align-items-center justify-content-center">
                            <img
                              src={`/images/article/${item.image}`}
                              className="w-50"
                              alt={item.title}
                            />
                          </div>
                          <div className="col-6 pr-60px d-flex align-items-center">
                            <div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
