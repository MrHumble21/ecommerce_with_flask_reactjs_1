import React from "react";

function LatestBlog() {
  return (
    <div className="container my-5">
      <h2 className="text-center my-5">Our Latest blogs</h2>
      <div className="row">
        <div className="col-sm-6 custom-blog">
          <a href="123">
            <div className="card">
              <img
                src="https://html.design/demo/floram/images/b1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="date blur w-50">
                  <h2> June 28</h2>
                  
                  <p>By Abdulboriy M</p>
                </div>
                <h5 className="card-title">Blog title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">
                  Read Full Article
                </button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-6 mt-3 mt-md-0">
          <a href="123">
            <div className="card custom-blog ">
              <img
                src="https://html.design/demo/floram/images/b2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="date blur w-50">
                  <h2> June 28</h2>
                  
                  <p>By Abdulboriy M</p>
                </div>
                <h5 className="card-title">Blog Name</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">
                  Read Full Article
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
