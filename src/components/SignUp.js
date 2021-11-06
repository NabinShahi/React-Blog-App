import React from "react";
import "../styles/signup.css";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { axiosInstance } from "../utils/axios";
import validateLogin from "../services/validateLogin";

const SignUp = () => {
  const history = useHistory();

  const submit = () => {
    console.log("Submitted Successfully");
  };

  const { values, handleChange, handleSubmit, errorValue } = useForm(
    submit,
    validateLogin
  );

  async function submitForm(e) {
    e.preventDefault();
    const res = await axiosInstance.post(
      "/auth/register",
      {
        name: values.username,
        email: values.email,
        password: values.password,
      }
    );

    history.push("/login");
  }

  console.log(errorValue);

  // const { username, email, password, confirmPassword } = values;
  return (
    <div className="signupForm">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>
        <p>Please fill this form to create an account!!!</p>
        <input
          name="username"
          type="text"
          placeholder="Username"
          // value={username}
          onChange={handleChange}
          required
        />
        <small className="errorText">
          {errorValue.username && errorValue.username}
        </small>
        <input
          name="email"
          type="email"
          placeholder="Email"
          // value={email}
          onChange={handleChange}
          required
        />
        <small className="errorText">
          {errorValue.email && errorValue.email}
        </small>
        <input
          name="password"
          type="password"
          placeholder="Password"
          // value={password}
          onChange={handleChange}
          required
        />
        <small className="errorText">
          {errorValue.password && errorValue.password}
        </small>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          // value={confirmPassword}
          onChange={handleChange}
          required
        />
        <small className="errorText">
          {errorValue.confirmPassword && errorValue.confirmPassword}
        </small>
        <button type="submit" onClick={submitForm}>
          Sign Up
        </button>
      </form>
      <p style={{ margin: "10px 590px" }}>
        Already have an account?{" "}
        <span onClick={() => history.push("/login")}>Login Here</span>
      </p>
    </div>
  );
};

export default SignUp;
