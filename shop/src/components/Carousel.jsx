import React from "react";
import bs  from './assets/bs.svg'
import love  from './assets/love.svg'
import next  from './assets/next.svg'
import prev  from './assets/prev.svg'

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid ">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="https://html.design/demo/floram/images/slider-img.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src={bs}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid ">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src={love}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-3">
        <button
          className="btn nav-bg-blur btn-transparent"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className=""><img width="25" src={prev} alt="" /></span>
        </button>
        <button
          className="btn nav-bg-blur mx-2 btn-transparent"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className=""><img width="25" src={next}  alt="" /></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
