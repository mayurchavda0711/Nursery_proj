import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{ backgroundColor: "#06331f" }}
    >
      <div className="container">
        <div className="row border-bottom border-secondary pb-4">
          {/* Left: Logo & About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <FaLeaf size={24} className="me-2 text-light" />
              <h5 className="m-0 fw-bold">Shree Ram Dharu Farm & Nursery</h5>
            </div>
            <p className="text-white-50 mb-0">
              Your trusted source for quality nursery plants. We bring nature to
              your doorstep.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0 text-md-center">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white-50 text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white-50 text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div className="col-md-4 text-md-end">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="text-white-50 mb-1">Email: shreeramdharufarm85@gmail.com</p>
            <p className="text-white-50 mb-0">Phone: +91 98987 49719</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center mt-3 text-white-50 small">
          © {new Date().getFullYear()} Shree Ram Dharu Farm & Nursery. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
