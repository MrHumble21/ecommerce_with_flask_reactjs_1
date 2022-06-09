import React, { useState, useEffect } from "react";

const SignUp = () => {
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState("");
  const [popupEmail, setPopupEmail] = useState("Email Address");
  const [color, setColor] = useState("black");
  const [red, setRed] = useState("");
  const [redEmail, setRedEmail] = useState("");
  const [colorEmail, setColorEmail] = useState("");
  const [disabled, setDisabled] = useState("");
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    !users.username.includes(e.target.value)
      ? setPopup(`${e.target.value} is available`)
      : setPopup(`${e.target.value} is not available`);

    !users.username.includes(e.target.value)
      ? setColor("green")
      : setColor("red");

    !users.username.includes(e.target.value)
      ? setRed("")
      : setRed("inputStyleRed");
    !users.username.includes(e.target.value)
      ? setDisabled("")
      : setDisabled("disabled");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    !users.email.includes(e.target.value)
      ? setPopupEmail(`Email Address: ${e.target.value} is available`)
      : setPopupEmail(`Email Address: ${e.target.value} is not available`);

    !users.email.includes(e.target.value)
      ? setColorEmail("green")
      : setColorEmail("red");

    !users.email.includes(e.target.value)
      ? setRedEmail("")
      : setRedEmail("inputStyleRed");
    !users.email.includes(e.target.value)
      ? setDisabled("")
      : setDisabled("disabled");
  };

  const inpStyle = {};
  // fetching data
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch("/all_users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const signUpHandler = (e) => {};

  return (
    <form action="/sign_up" method="post">
      <div>
        <h2 className="mb-2 text-center">Sign Up</h2>
        <div className="form-floating mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            id="floatingInput1"
            placeholder="Full Name"
          />
          <label htmlFor="floatingInput1">Full Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            name="username"
            value={username}
            onChange={usernameHandler}
            type="text"
            className={`form-control ${red}`}
            id="floatingInput2"
            placeholder="Username"
          />
          <label
            htmlFor="floatingInput2"
            style={{
              color: color,
            }}
          >
            Username: {popup}
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            id="floatingInput3"
            placeholder="phone"
          />
          <label htmlFor="floatingInput3">Phone number</label>
        </div>
        <div className="form-floating mb-3">
          <select
            name="gender"
            className="form-select"
            aria-label="Default select example"
          >
            <option default>choose your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
            className={`form-control ${redEmail}`}
            id="floatingInput4"
            placeholder="name@example.com"
          />
          <label
            style={{
              color: colorEmail,
            }}
            htmlFor="floatingInput4"
          >
            {" "}
            {popupEmail}{" "}
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className={`form-control `}
            id="floatingPassword5"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword5">Password</label>
        </div>
        <div className="form-floating text-center mt-4">
          <button
            style={{ backgroundColor: "#3BACB6" }}
            className={`btn text-center w-50 ${disabled}`}
            type="submit"
            onclick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
