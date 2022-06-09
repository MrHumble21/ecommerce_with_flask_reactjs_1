import React from "react";

function Jumbo() {
  return (
    <div className="container p-4 my-5">
      <div className="row">
        <div className="col-sm-6 blur">
          <img
            src="https://html.design/demo/floram/images/about-img.png"
            className="w-100"
            alt=""
          />
        </div>
        <div className="col-sm-6 mt-2 mt-md-0">
          <div
            style={{ minHeight: "380px" }}
            className="d-flex flex-column blur justify-content-center "
          >
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
            </p>
            <button className="btn btn-light my-2">Read More</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
