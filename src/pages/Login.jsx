import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_clear from "../img/logo_clear_cropped.png";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <img src={logo_clear} alt="logo" />
      <form action="">
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="login__button">
          Login
        </button>
        {err && <p>{err}</p>}
        <span>
          Don't have an account? <Link to={"/register"}>Register</Link>!
        </span>
      </form>
    </div>
  );
};

export default Login;
