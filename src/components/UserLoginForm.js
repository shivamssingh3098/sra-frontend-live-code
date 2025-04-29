import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Captcha from "./Captcha";
import { FaUser, FaKey, FaSignInAlt } from "react-icons/fa";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [actualCaptcha, setActualCaptcha] = useState("");
  const [error, setError] = useState("");

  const handleCaptchaChange = (value) => {
    setActualCaptcha(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput !== actualCaptcha) {
      setError("Captcha does not match");
      return;
    }

    try {
      const response = await axios.post("/api/v1/users/login", {
        email: userId,
        password: password,
      });

      if (response.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.data.user)
        );

        // 🔁 Redirect to protected page
        navigate("/services", { replace: true });
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600">{error}</div>}
        {/* Login Fields */}
        <div>
          <label className="flex items-center gap-2">
            <FaUser className="text-blue-600 " /> User E-MAIL
          </label>
          <input
            type="email"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="flex items-center gap-2">
            <FaKey className="text-blue-600" /> Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Enter captcha value"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
                <Captcha onChange={handleCaptchaChange} />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <FaSignInAlt /> Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
