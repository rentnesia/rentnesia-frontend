import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

const options = {
  items: 1,
  navText: [
    `<img width="50%" src='/images/carousel/button/arrow-left.png'>`,
    `<img width="50%" src='/images/carousel/button/arrow-right.png'>`
  ],
  nav: true,
  rewind: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 3000
};

class Testimonial extends Component {
  state = {
    testimonials: [
      {
        image: "gibran.png",
        name: "Gibran",
        job: "Youtuber",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum aperiam dicta accusamus quidem. Officiis adipisci voluptates exercitationem blanditiis quasi quam, fuga mollitia, dolor molestiae iste culpa nobis et iusto alias dicta facere debitis. Iste consequuntur quos recusandae pariatur! Id quibusdam eaque dolor qui iusto velit quasi perferendis possimus esse at ut, nesciunt voluptate architecto? Quibusdam rerum repellendus fugiat nisi assumenda facilis consequatur repudiandae cumque magni eum praesentium minima id, architecto saepe atque necessitatibus nemo, illum explicabo eius at tempore. In deserunt reiciendis sed illum alias fugit repudiandae molestiae! Nostrum eaque doloremque nisi eligendi ea. Est, dolorum vel ipsa debitis sint ipsam nisi et. Fugit alias nemo molestias minus dignissimos, odio provident voluptatem! Beatae omnis aut ratione deserunt delectus vero architecto autem tempore, dicta atque provident reprehenderit magni quia debitis eveniet aperiam doloribus consequatur repellat voluptas dolor aspernatur excepturi sint? Dolorem soluta rem adipisci ad! Quo aut libero quaerat molestias id illo quidem, neque earum eveniet! Quas minus odio deserunt, nobis minima laudantium? Molestias architecto quas fugit debitis neque quasi necessitatibus harum praesentium provident, excepturi similique, cumque voluptatum deserunt quia doloremque consequuntur eos vitae, officia laboriosam quaerat. Aperiam, expedita consequatur ad officia molestiae perspiciatis porro enim doloribus ipsum accusantium iste blanditiis assumenda? Rerum omnis in maiores impedit a ullam sint, voluptatibus atque consectetur aut sed sit quidem temporibus vero corporis amet neque fugiat praesentium magni, repudiandae esse? Mollitia, quia doloremque culpa, consequatur qui a est praesentium alias nostrum error neque! Fugit laudantium itaque animi corporis recusandae at accusantium eos nam fugiat? Deleniti eligendi totam quaerat quisquam possimus necessitatibus fuga consequatur reprehenderit ex tempore culpa maxime, aperiam iste. Magni, sint quasi itaque deserunt iusto voluptate minus accusantium nostrum at omnis distinctio assumenda. Rerum odio magni minima ullam natus temporibus quas eligendi in, tempora ipsum repellendus quis? At magnam nulla odio nostrum."
      },
      {
        image: "gibran.png",
        name: "Seseorang",
        job: "Menjadi Seseorang",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum aperiam dicta accusamus quidem. Officiis adipisci voluptates exercitationem blanditiis quasi quam, fuga mollitia, dolor molestiae iste culpa nobis et iusto alias dicta facere debitis. Iste consequuntur quos recusandae pariatur! Id quibusdam eaque dolor qui iusto velit quasi perferendis possimus esse at ut, nesciunt voluptate architecto? Quibusdam rerum repellendus fugiat nisi assumenda facilis consequatur repudiandae cumque magni eum praesentium minima id, architecto saepe atque necessitatibus nemo, illum explicabo eius at tempore. In deserunt reiciendis sed illum alias fugit repudiandae molestiae! Nostrum eaque doloremque nisi eligendi ea. Est, dolorum vel ipsa debitis sint ipsam nisi et. Fugit alias nemo molestias minus dignissimos, odio provident voluptatem! Beatae omnis aut ratione deserunt delectus vero architecto autem tempore, dicta atque provident reprehenderit magni quia debitis eveniet aperiam doloribus consequatur repellat voluptas dolor aspernatur excepturi sint? Dolorem soluta rem adipisci ad! Quo aut libero quaerat molestias id illo quidem, neque earum eveniet! Quas minus odio deserunt, nobis minima laudantium? Molestias architecto quas fugit debitis neque quasi necessitatibus harum praesentium provident, excepturi similique, cumque voluptatum deserunt quia doloremque consequuntur eos vitae, officia laboriosam quaerat. Aperiam, expedita consequatur ad officia molestiae perspiciatis porro enim doloribus ipsum accusantium iste blanditiis assumenda? Rerum omnis in maiores impedit a ullam sint, voluptatibus atque consectetur aut sed sit quidem temporibus vero corporis amet neque fugiat praesentium magni, repudiandae esse? Mollitia, quia doloremque culpa, consequatur qui a est praesentium alias nostrum error neque! Fugit laudantium itaque animi corporis recusandae at accusantium eos nam fugiat? Deleniti eligendi totam quaerat quisquam possimus necessitatibus fuga consequatur reprehenderit ex tempore culpa maxime, aperiam iste. Magni, sint quasi itaque deserunt iusto voluptate minus accusantium nostrum at omnis distinctio assumenda. Rerum odio magni minima ullam natus temporibus quas eligendi in, tempora ipsum repellendus quis? At magnam nulla odio nostrum."
      },
      {
        image: "gibran.png",
        name: "Gatot",
        job: "Stand Up Comedy Receh",
        desc: "Saya Berkata 'Ayo Nyewa Disini aja Gan! Ashyiiaaappp'"
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="swap-grey" />
        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center header-section">
                <h3>What Our Customers Have to Say</h3>
                <span>
                  We are so happy to create smiles, allow us to create a happy
                  story for you :)
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 box-testimonial">
                <OwlCarousel id="testimonial-carousel" options={options}>
                  {this.state.testimonials.map((item, i) => (
                    <div key={i} className="text-center item">
                      <p>{item.desc.slice(0, 400)}</p>
                      <div className="d-flex justify-content-center mt-50px">
                        <div>
                          <img
                            src={`/images/testimonials/${item.image}`}
                            className="testimonial-image"
                            style={{ marginTop: "-30px" }}
                            alt={item.image}
                          />
                          <div className="testimonial-text">
                            <h5>{item.name}</h5>
                            <span>{item.job}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
