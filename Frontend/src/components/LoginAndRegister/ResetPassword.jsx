import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Popup from "../../utils/Popup"; // Assumes you have a reusable Popup component
import "./ResetPassword.css"; // Styles

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPopup({
        visible: true,
        message: "Passwords do not match.",
        type: "error",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/password-reset/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setPopup({
          visible: true,
          message: "Password reset successfully.",
          type: "success",
        });
      } else {
        setPopup({
          visible: true,
          message: data.error || "Failed to reset password.",
          type: "error",
        });
      }
    } catch (error) {
      setPopup({
        visible: true,
        message: "An unexpected error occurred. Please try again.",
        type: "error",
      });
    }
  };

  const closePopup = () => {
    setPopup({ visible: false, message: "", type: "" });
  };

  return (
    <div className="reset-password-container">
      {popup.visible && (
        <Popup message={popup.message} type={popup.type} onClose={closePopup} />
      )}
      
      <form onSubmit={handleSubmit} className="reset-form">
      <h2 className="reset-heading">Set Your New Password</h2>
        <label htmlFor="password" className="reset-label">
          New Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="reset-input"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password" className="reset-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          className="reset-input"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="reset-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
