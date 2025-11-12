import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
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
            <Link to="/" className="nav-link fw-semibold text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link fw-semibold text-white">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link fw-semibold text-white">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link fw-semibold text-white">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="d-flex align-items-center gap-4">
          <FaSearch size={18} />
          <FaUser size={18} />
          <Link to="/login" className="text-white fw-semibold text-decoration-none">
            Login
          </Link>
          <FaShoppingCart size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
