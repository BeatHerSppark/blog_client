import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_clear from "../img/logo_clear_cropped.png";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        inputs
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <img src={logo_clear} alt="logo" />
      <form action="">
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="login__button">
          Register
        </button>
        <p>Something went wrong..</p>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>!
        </span>
      </form>
    </div>
  );
};

export default Register;
