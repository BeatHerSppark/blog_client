import React from "react";
import { Link } from "react-router-dom";
import logo_clear from "../img/logo_clear_cropped.png";

const Login = () => {
  return (
    <div className="auth">
      <img src={logo_clear} alt="logo" />
      <form action="">
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button className="login__button">Login</button>
        <p>Something went wrong..</p>
        <span>
          Don't have an account? <Link to={"/register"}>Register</Link>!
        </span>
      </form>
    </div>
  );
};

export default Login;
