import React from "react";

function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="text-center my-2"> Testimonial</h2>
      <p className="my-3 text-center">
        Even slightly believable. If you are going to use a passage of Lorem
        Ipsum, you need to
      </p>

      <div
        id="carouselExampleControls2"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item blur-dark active">
            <div className="row">
              <div className="col-sm-3 p-4 ">
                <div className="container">
                  <img
                    style={{ borderRadius: "100%" }}
                    src="https://html.design/demo/floram/images/client.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-sm-9 p-4 ">
                <div className="container mt-5">
                  <h2>CLARY KENTON</h2>

                  <h5 className='text-white'>CUSTOMER</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae earum reprehenderit voluptas. Consequatur
                    asperiores tempore molestiae delectus adipisci qui dolorem
                    iste placeat impedit perspiciatis. Molestiae quaerat iste
                    maxime quod deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  blur-dark">
            <div className="row ">
              <div className="col-sm-3 p-4 ">
                <div className="container">
                  <img
                    style={{ borderRadius: "100%" }}
                    src="https://html.design/demo/floram/images/client.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-sm-9 p-4">
                <div className="container mt-5">
                  <h2>CLARY KENTON</h2>

                  <h5 className='text-white'>CUSTOMER</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae earum reprehenderit voluptas. Consequatur
                    asperiores tempore molestiae delectus adipisci qui dolorem
                    iste placeat impedit perspiciatis. Molestiae quaerat iste
                    maxime quod deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
