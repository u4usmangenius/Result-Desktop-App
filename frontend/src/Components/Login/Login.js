import React, { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { loginstore } from "../../Store/LoginStore/LoginStore";
import { observer } from "mobx-react-lite";
import "./Login.css";
import img from "../../assests/character.png";
import { toJS } from "mobx";
import { handleLogin, handleForgotPassword } from "./LoginModules";
import { Navigate, useNavigate } from "react-router-dom";
import { validateForm } from "./ValidateForm";
const Login = observer(() => {
  const { formFields, setFormField } = loginstore;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("data");
    if (auth) {
      navigate("/sidebar/dashboard");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    loginstore.setFormField(name, value);
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const loginResult = await handleLogin();
      if (loginResult) {
        navigate("/sidebar/dashboard");
      } else {
        alert("Invalid credentials");
        setErrorMessage("Invalid credentials");
      }
    } else {
      console.log(
        "Your Validate Form is not Working, Please fill all the fields"
      );
    }
  };
  const handleForgotPasswordClick = async () => {
    const message = await handleForgotPassword();
    setErrorMessage(message);
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p>Start managing your result faster and better</p>
        <div className="login-input-group">
          <label>UserName</label>
          <div className="login-input-icon">
            <FaUser className="login-profile-icon" />{" "}
            <input
              type="text"
              name="username"
              autoComplete="none"
              value={formFields.username}
              onChange={handleInputChange}
              className="login-input"
              placeholder="Enter Your UserName"
            />
          </div>
          {loginstore.errors.username && (
            <p className="login-error-design">
              {toJS(loginstore.errors).username}
            </p>
          )}
        </div>

        <div className="login-input-group">
          <label>Password</label>
          <div className="login-input-icon">
            <FaLock className="login-lock-icon" />
            <input
              name="password"
              type="password"
              value={formFields.password}
              onChange={handleInputChange}
              className="login-input"
              placeholder="Enter Your Password"
            />
          </div>
          {loginstore.errors.password && (
            <p className="login-error-design">
              {toJS(loginstore.errors).password}
            </p>
          )}
          <p className="login-forgot-password">Forgotten Password?</p>
        </div>

        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </div>

      <div className="login-background-image">
        <img src={img} alt="image"></img>
      </div>
    </div>
  );
});

export default Login;
