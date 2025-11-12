import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-2 text-success">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h3>
        <p className="text-center text-muted mb-4">
          {isSignUp ? "Join us and start your plant journey" : "Sign in to continue"}
        </p>

        <form>
          {isSignUp && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mayur Chavda"
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="mayur@gmail.com"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isSignUp && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="btn w-100 text-white mt-3"
            style={{ backgroundColor: "#06331f" }}
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-success fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
