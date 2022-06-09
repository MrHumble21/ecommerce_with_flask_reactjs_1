import React from "react";

const Admin = () => {
  console.log("subclass Admin");
  return (
    <div className="mt-5">
      <div className="container w-25">
        <h2 className="text-center">Add product from here!</h2>
        <form
          action="/save_product"
          method="post"
          autoComplete={"off"}
          encType="multipart/form-data"
        >
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Product Name
            </span>
            <input
              name="name"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Product Price
            </span>
            <input
              name="price"
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Product Description
            </span>
            <input
              name="description"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Product Count
            </span>
            <input
              name="stock"
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Product Image
            </span>
            <input
              name="file"
              accept="image/*"
              type="file"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button className="btn btn-success">Save Product</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
