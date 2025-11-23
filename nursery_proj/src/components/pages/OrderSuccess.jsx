import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark-animation">
          <div className="checkmark"></div>
        </div>

        <h1>Order Placed Successfully!</h1>
        <p>Your order has been received. We will deliver it soon.</p>

        <button className="success-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}
