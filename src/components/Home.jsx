import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  

  return (
    <>
    
    <div className="hero_area">
      <div className="bg-box">
        <img src="https://www.quefaireavec.com/upload/plat-tunisien.jpg" alt="" />
      </div>
     
      {/* slider section */}
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Benna Tounsia</h1>
                      <p>
                        Benna Tounsia is a restaurant located in Tunis, Tunisia. It offers a variety of dishes, including Tunisian cuisine, as well as international dishes. The restaurant has a cozy and inviting atmosphere, with comfortable seating and a warm ambiance. It is a great place to enjoy a meal with friends and family, or to celebrate a special occasion.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam esse
                        error unde. Tempora ex doloremque, labore, sunt repellat
                        dolore, iste magni quos nihil ducimus libero ipsam.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </section>
      {/* end slider section */}
    </div>
    
    {/* offer section */}
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container ">
          <div className="row">
            <div className="col-md-6  ">
              <div className="box ">
                <div className="img-box">
                  <img src="/src/assets/images/o1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Tasty Thursdays</h5>
                  <h6>
                    <span>20%</span> Off
                  </h6>
                 
                  <a href="">
                    Order Now{" "}
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: "new 0 0 456.029 456.029" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                 C457.728,97.71,450.56,86.958,439.296,84.91z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6  ">
              <div className="box ">
                <div className="img-box">
                  <img src="/src/assets/images/o2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Pizza Days</h5>
                  <h6>
                    <span>15%</span> Off
                  </h6>
                  <a href="">
                    Order Now{" "}
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: "new 0 0 456.029 456.029" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                 C457.728,97.71,450.56,86.958,439.296,84.91z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end offer section */}
   

    {/* about section */}
    <section className="about_section layout_padding"id="about">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="img-box">
              <img src="/src/assets/images/about-img.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>We Are Feane</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end about section */}
   
    {/* client section */}
    <section className="client_section layout_padding-bottom">
      <div className="container">
       
        <div className="carousel-wrap row ">
          <div className="owl-carousel client_owl-carousel">
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                  </p>
                  <h6>Moana Michell</h6>
                  <p>magna aliqua</p>
                </div>
                <div className="img-box">
                  <img src="/src/assets/images/client1.jpg" alt="" className="box-img" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                  </p>
                  <h6>Mike Hamell</h6>
                  <p>magna aliqua</p>
                </div>
                <div className="img-box">
                  <img src="images/client2.jpg" alt="" className="box-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end client section */}
  </>
  
  
  );
};

export default Home;
