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
          title: "Living Lighter Solve Space Problems",
          short_title: "Why Rentnesia",
          id: "why-rentnesia",
          icon: "question",
          data: [
            {
              title: "Store Items Securely",
              desc:
                "By signing up, scheduling & preparing your first pickup items for free, simply select a delivery time that works for you, and we'll come to your door or lobby and store them securely in our warehouse.",
              image: "red_store_items.svg"
            },
            {
              title: "Rent to Own or Return Anytime",
              desc:
                "How about a flexiblity of an extended test drive where you can rent the product for given months and then choose to either buy or return at your convenience. Ensuring you more savings!",
              image: "red_rent_own_return.svg"
            },
            {
              title: "Save Huge Capital Commitment",
              desc:
                "Why spend on products that lose up to 50% of its value the moment you purchase it? Renting gives you an opportunity to invest that money on experiences or places where you can get high returns.",
              image: "red_save_capital.svg"
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
                "Change houses or even cities, without worrying about your subscription. At Rentnesia, your subscription travels with you, be it within the city or to the other major cities we cater to.",
              image: "red_relocation.svg"
            },
            {
              title: "Product Swaps",
              desc:
                "Bored with the same look? You can easily exchange products for a new one of same or higher value. Get a brand-new look with the same great convenience! (Exclusive only for 36 Months tenure).",
              image: "red_product_swaps.svg"
            },
            {
              title: "Free Maintenance",
              desc:
                "Is regular maintenance a pain and costly issue in owning a product? Switch to RMI (rental monthly instalment) and get free maintenance - every year!.",
              image: "red_free_maintenance.svg"
            }
          ]
        },
        {
          title: "How it Works",
          short_title: "Works",
          icon: "lightbulb",
          id: "works",
          data: [
            {
              title: "Join The Community",
              desc:
                "Verifying your profile by share a few essential details with us to be a part of our community and enjoy faster delivery of your orders. Also, don't worry your details are safe with us.",
              image: "red_join_verified_community.svg"
            },
            {
              title: "Track your delivery",
              desc:
                "Our processes are transparent which help you see real-time updates of your items. Enjoy a seamless delivery experience in your rentnesia journey.",
              image: "red_track_items.svg"
            },
            {
              title: "Store, Share and Renting with Rentnesia",
              desc:
                "Rentnesia comes to you to pick up the items you don't use every day, and takes them back to a secure facility. After that, Our Team unpacks, photographs, catalogs each item by uploads the images and information to your account.",
              image: "red_renting_with_rentnesia.svg"
            }
          ]
        }
      ],
      swap: ["white", "w-grey", "white", "black"],
      scrollspyParent: ["why-rentnesia", "benefits", "works"]
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
