import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { useHistory } from "react-router-dom";
import validateLogin from "../services/validateLogin";
import useForm from "../hooks/useForm";
import {axiosInstance} from '../utils/axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const submit = () => {
    console.log("Submitted Successfully");
  };

  const { values, handleChange, handleSubmit, errorValue } = useForm(
    submit,
    validateLogin
  );

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  async function submitForm(e) {
    e.preventDefault();
    const res = await axiosInstance.post('/auth/login', {
      email: values.email,
      password: values.password
    });

    const token = res.data.token;
    console.log(token)
    localStorage.setItem('user-token', token);
    history.push('/dashboard');
  }

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if(token) {
      history.push("/dashboard");
    }
  })

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1>Login</h1>
      <input
        name="email"
        placeholder="Email"
        type="email"
        // value={email}
        onChange={handleChange}
        required
      />
      <small className="errorText">
        {errorValue.email && errorValue.email}
      </small>
      <input
        name="password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        // value={password}
        onChange={handleChange}
        required
      />
      <small className="errorText">
        {errorValue.password && errorValue.password}
      </small>
      <br />
      <button onClick={handleShowPassword}>Show Password</button>
      <button type="submit" onClick={submitForm}>Login</button>
      <p>Do not have an account ?</p>
      <button onClick={() => history.push("/signup")}>Create an Account</button>
    </form>
  );
};

export default Login;
