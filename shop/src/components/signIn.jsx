import React from "react";

const SignIn = () => {
  return (
    <form action="/sign_in" method="post">
      <div>
        <h2 className="mb-5 text-center">Sign in</h2>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating text-center mt-4">
          <button
            style={{ backgroundColor: "#3BACB6" }}
            className="btn text-center w-50"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
