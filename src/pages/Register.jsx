import React from "react";
import { Link } from "react-router-dom";
import logo_clear from "../img/logo_clear_cropped.png";

const Register = () => {
  return (
    <div className="auth">
      <img src={logo_clear} alt="logo" />
      <form action="">
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input required type="password" placeholder="Confirm password" />
        <button className="login__button">Register</button>
        <p>Something went wrong..</p>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>!
        </span>
      </form>
    </div>
  );
};

export default Register;
