import React, { useState } from "react";
import {
  FaSync,
  FaUser,
  FaKey,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OfficerLogin = ({ onSwitchToUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: "",
  });

  const [captchaText, setCaptchaText] = useState("ABC123");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.captcha !== captchaText) {
      setMessageType("error");
      setMessage("Invalid CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    try {
      const response = await fetch(
        "https://sra-government-project-thane-1.onrender.com/api/v1/department-managers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok && data.data?.departmentManager?.userType === "DEPARTMENT_MANAGER") {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        localStorage.setItem("userType", data.data.departmentManager.userType);
        localStorage.setItem("userName", data.data.departmentManager.userName);
        localStorage.setItem("fullName", data.data.departmentManager.fullName);

        setMessageType("success");
        setMessage("Login successful!");

        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } else {
        setMessageType("error");
        setMessage(data.message || "Login failed.");
        generateCaptcha();
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessageType("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="officer-login-container animate-fade-in">
      <h2>
        <FaUser /> LOG IN / REGISTER
      </h2>

      <div className="officer-login-tabs">
        <button
          type="button"
          className="officer-register-btn"
          onClick={onSwitchToUser}
        >
          <FaUserPlus /> USER LOGIN
        </button>
        <button className="officer-login-btn">
          <FaSignInAlt /> OFFICER LOGIN
        </button>
      </div>

      <div className="login-form">
        <h3>
          <MdLock /> Already Registered? Login Here
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="officer-form-group">
            <label>
              <FaUser /> Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="officer-form-group">
            <label>
              <FaKey /> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="officer-captcha-section">
            <div className="captcha-instruction">Enter the captcha shown below</div>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleInputChange}
              placeholder="Enter captcha"
              className="captcha-input"
              required
            />
            <div className="officer-captcha-box">
              <button
                type="button"
                className="officer-reload-btn"
                onClick={generateCaptcha}
                title="Click to reload captcha"
              >
                <FaSync />
              </button>
              <div className="officer-captcha-text">{captchaText}</div>
            </div>
          </div>

          <div className="officer-forgot-links">
            <a href="#forgot-password">
              <FaKey /> Forgot Password
            </a>
            <a href="#forgot-username">
              <FaUser /> Forgot Username
            </a>
          </div>

          {message && (
            <div className={`form-message ${messageType}`}>
              {message}
            </div>
          )}

          <button type="submit" className="officer-submit-btn">
            <FaSignInAlt /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfficerLogin;
