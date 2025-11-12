import React from "react";
import "./Footer.css";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{
        backgroundColor: "#06331f",
        color: "#f8f9fa",
      }}
    >
      <div className="container-fluid">
        <div className="row border-bottom border-secondary pb-4">
          {/* Left Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="d-flex align-items-center mb-3" style={{ color: "#ffffff" }}>
              <Leaf size={20} className="me-2" />
              Shree Ram Dharu Farm & Nursery
            </h5>
            <p className="small" style={{ color: "#b0b0b0" }}>
              Your trusted source for quality nursery plants. We bring nature to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3" style={{ color: "#ffffff" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled small" style={{ color: "#b0b0b0" }}>
              <li className="mb-2">
                <a href="/" className="text-decoration-none" style={{ color: "#b0b0b0" }}>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-decoration-none" style={{ color: "#b0b0b0" }}>
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none" style={{ color: "#b0b0b0" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none" style={{ color: "#b0b0b0" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5 className="mb-3" style={{ color: "#ffffff" }}>
              Contact Us
            </h5>
            <p className="small mb-1" style={{ color: "#b0b0b0" }}>
              Email:{" "}
              <a
                href="mailto:info@shreeramdharu.com"
                className="text-decoration-none"
                style={{ color: "#f8f9fa" }}
              >
                info@shreeramdharu.com
              </a>
            </p>
            <p className="small" style={{ color: "#b0b0b0" }}>
              Phone:{" "}
              <a
                href="tel:+919876543210"
                className="text-decoration-none"
                style={{ color: "#f8f9fa" }}
              >
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-3 small" style={{ color: "#b0b0b0" }}>
          © 2025 Shree Ram Dharu Farm & Nursery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
