import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUsPage = () => {
  return (
    <div>
      {/* 🌱 Header Section */}
      <section
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#06331f" }}
      >
        <div className="container">
          <h1 className="display-5 mb-3">Contact Us</h1>
          <p className="lead opacity-75">
            We're here to help — let’s grow something beautiful together 🌿
          </p>
        </div>
      </section>

      {/* 📞 Contact Info Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="text-success">📍 Address</h5>
              <p className="text-muted mb-0">
                Shree Ram Dharu Farm, Navli- Asodar Road Andhariya, chokdi,<br /> Anand,Gujarat-388355
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-success">📞 Phone</h5>
              <p className="text-muted mb-0">+91 98987 49719<br>
              </br>
              +91 87330 64817
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-success">📧 Email</h5>
              <p className="text-muted mb-0">shreeramdharufarm85@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ Google Map Section */}
      <section className="pb-5">
        <div className="container">
          <h2 className="text-center text-success mb-4">Find Us on Map</h2>
          <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9374443434367!2d72.9514598!3d22.5065301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4da2e79ac1a5%3A0x666e60fc9cbec277!2sShree%20Ram%20Dharu%20Farm!5e0!3m2!1sen!2sin!4v1763042233109!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ram Dharu Farm Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
