import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaUser, FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext"; // ✅ Auth context
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header() {
  const { cartItems } = useCart();
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();


  const { user, logout } = useAuth(); // ✅ Get user + logout

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#073C2C", padding: "10px 40px" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center text-white">

        {/* Logo */}
        <div className="d-flex align-items-center">
          <FaLeaf size={30} className="me-2" />
          <div>
            <h3 className="m-0 fw-bold">Shree Ram Dharu</h3>
            <small>Farm & Nursery</small>
          </div>
        </div>

        {/* Center Menu */}
        <ul className="navbar-nav mx-auto mb-0 d-flex flex-row gap-4">
          <li className="nav-item"><Link to="/" className="nav-link fw-semibold text-white">Home</Link></li>
          <li className="nav-item"><Link to="/shop" className="nav-link fw-semibold text-white">Shop</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link fw-semibold text-white">About Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link fw-semibold text-white">Contact Us</Link></li>
        </ul>

        {/* Right side */}
        <div className="d-flex align-items-center gap-4">

          {/* If NOT logged in */}
          {!user && (
            <>
              <FaUser size={18} />
              <Link to="/login" className="text-white fw-semibold text-decoration-none">
                Login
              </Link>
            </>
          )}

          {/* If logged in */}
{user && (
  <div className="position-relative">
    
    {/* Profile Icon */}
    <div
      onClick={() => setOpenProfile(!openProfile)}
      style={{ cursor: "pointer" }}
      className="text-white"
    >
      <FaUser size={20} />
    </div>

    {/* Dropdown */}
    {openProfile && (
      <div
        className="position-absolute p-3"
        style={{
          top: "35px",
          right: "0",
          background: "#fff",
          color: "#073C2C",
          borderRadius: "8px",
          width: "160px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          zIndex: 999,
        }}
      >
        <p className="m-0 fw-bold">{user.name}</p>

        <button
  className="btn btn-danger btn-sm w-100 mt-2"
  onClick={() => {
    logout();
    setOpenProfile(false);
    window.location.hash = "#/login";
  }}
>
  Logout
</button>


      </div>
    )}

  </div>
)}


          {/* Cart */}
          <Link to="/cart" className="position-relative text-white">
            <FaShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span
                className="badge bg-danger position-absolute"
                style={{ top: "-10px", right: "-12px", fontSize: "10px" }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Header;
