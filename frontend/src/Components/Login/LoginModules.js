import axios from "axios";
import { loginstore } from "../../Store/LoginStore/LoginStore";

export const handleLogin = async () => {
  const { formFields } = loginstore;

  const data = {
    username: formFields.username,
    password: formFields.password,
  };

  try {
    const response = await axios.post("http://localhost:8080/api/login", data);

    if (response.data.success) {
      localStorage.setItem("data", JSON.stringify(data));
      return true; // Login successful
    } else {
      return false; // Invalid credentials
    }
  } catch (error) {
    console.error("Error:", error);
    return false; // An error occurred
  }
};

export const handleForgotPassword = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return "Reset token sent to your email";
    } else {
      return "Failed to send reset token";
    }
  } catch (error) {
    console.error("Error:", error);
    return "An error occurred. Please try again later.";
  }
};
