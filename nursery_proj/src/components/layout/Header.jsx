import React from "react";
import { FaLeaf, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#073C2C", padding: "10px 40px" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center text-white">
        {/* Left: Logo + Title */}
        <div className="d-flex align-items-center">
          <FaLeaf size={28} className="me-2" />
          <div>
            <h4 className="m-0 fw-bold">Shree Ram Dharu</h4>
            <small>Farm & Nursery</small>
          </div>
        </div>

        {/* Center: Navigation */}
        <ul className="navbar-nav mx-auto mb-0 d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link fw-semibold text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold text-white" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold text-white" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="d-flex align-items-center gap-4">
          <FaSearch size={18} />
          <FaUser size={18} />
          <span className="fw-semibold">Login</span>
          <FaShoppingCart size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
