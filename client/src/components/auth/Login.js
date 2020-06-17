import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> sign Into Your Account
      </p>
      <form
        className="form"
        action="create-profile.html"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Doesn't have an account? <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
  );
}

export default Login;
