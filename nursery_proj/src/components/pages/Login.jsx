import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";   // ✅ Added

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();   // ✅ Added — get login() from AuthContext

  // input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // SIGNUP
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const res = await axios.post("http://127.0.0.1:8000/api/register/", {
          name,
          email,
          password,
        });

        alert("Account Created Successfully!");
        setIsSignUp(false);
      } catch (err) {
        alert("Signup Error: " + err.response?.data?.error);
      }

    } else {
      // LOGIN
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/login/", {
          email,
          password,
        });

        // ✅ Save user in AuthContext (important)
        login({
          name: res.data.name,
          email: res.data.email,
        });

        alert("Login Successful!");

        navigate("/");  // Redirect

      } catch (err) {
        alert("Login Failed: " + err.response?.data?.error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-2 text-success">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h3>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><FaUser /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-white"><FaEnvelope /></span>
              <input
                type="email"
                className="form-control"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {isSignUp && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><FaLock /></span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn w-100 text-white mt-3"
            style={{ backgroundColor: "#06331f" }}>
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="text-success fw-bold" style={{ cursor: "pointer" }}
            onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Create Account"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
