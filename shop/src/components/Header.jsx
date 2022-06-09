import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";

import signin from "./assets/signin.svg";
function Header({ modal, sign_in }) {
  // // fetching data from api
  const log = () => {
    const [logout, setLogout] = useState("");
    useEffect(() => {
      fetch("/logout")
        .then((response) => response.json())
        .then((data) => setLogout(data));
    }, []);
    {
      console.log(logout["status"]);
    }
  };

  return (
    <nav className={`navbar  fixed-top navbar-expand-lg nav-bg-blur  `}>
      <div className="container-fluid">
        <Link className="navbar-brand  rounded p-1" to="/">
          <span>
            <img src={logo} width="35" alt="" />
            Ecommerce
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-products">
                Fruits
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USEFUL
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/blog">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/intesting">
                    INTERESTING
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/facts">
                    FACTS
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex">
            {sign_in ? (
              <a onClick={log} href="/logout">Log out</a>
            ) : (
              <Link
                data-bs-toggle="modal"
                onClick={modal}
                data-bs-target="#exampleModal"
                to="/sign-up"
                className="nav-link mx-2 p-2 nav-bg-blur btn"
              >
                <img src={signin} width="25" alt="" /> "Sign In"
              </Link>
            )}

            {console.log(sign_in)}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
