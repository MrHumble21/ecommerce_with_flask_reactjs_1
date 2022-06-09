import React from "react";

function Categories() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-6">
          <a href="123">
            <div className="qulupnay">
              <div className="blur">
                <h2 className="text-white fs-3">Upto 20% Off</h2>
                <button type="button" className="btn btn-warning">
                  SHOP NOW!
                </button>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-2 mt-md-0 col-sm-6">
          <div className="row">
            <div className="col">
              <a href="123">
                <div className="limon">
                  <div className="blur">
                    <h2 className="text-white fs-3">Up to 10% Off</h2>
                    <button type="button" className="btn btn-warning">
                      SHOP NOW!
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="123">
                <div className="qovun">
                  <div className="blur">
                    <h2 className="text-white fs-3">Up to 10% Off </h2>
                    <button type="button" className="btn btn-warning">
                      SHOP NOW!
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
