import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./SignUp";

const Modal = ({ hidden, modal, users, light }) => {
  const [signIn, signUp] = useState(true);
  return (
    <div
      className={`${
        hidden ? "visually-hidden" : ""
      }  modal modal-dialog-scrollable  `}
      id="exampleModal"
      tabIndex="-10"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={modal}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{signIn ? <SignIn /> : <SignUp />}</div>
          <div className="my-4">
            <h5
              className="text-center"
              id="exampleModalLabel"
              onClick={() => {
                signUp(!signIn);
              }}
            >
              {signIn
                ? "Dont You Have an account ?"
                : "Do you have an account?"}{" "}
              <br />{" "}
              <span className="badge bg-info">
                {<SignUp /> ? "Sign Up Please" : "Sign In Please"}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
