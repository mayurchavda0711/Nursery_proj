import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
const AboutUsPage = () => {
  return (
    <div>
      {/* 🌿 Hero Section */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: "#06331f" }}>
        <Container>
          <h1 className="display-4 fw-bold">About Shree Ram Dharu Farm & Nursery</h1>
          <p className="lead opacity-75">
            Bringing the beauty of nature closer to your home.
          </p>
        </Container>
      </section>

      {/* 🌱 Our Story Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="text-success mb-4">Our Story</h2>
              <p>
                Shree Ram Dharu Farm & Nursery was founded with a deep love for
                plants and nature. What started as a small family-run nursery
                has grown into a trusted destination for quality plants across
                the region.
              </p>
              <p>
                We cultivate a wide variety of plants — from indoor greens to
                exotic species — all nurtured with care and passion.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800"
                alt="Our Nursery"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌸 Our Values Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center text-success mb-5">Our Values</h2>
          <Row>
            {[
              {
                title: "Quality First",
                text: "We ensure every plant is healthy and of the highest quality.",
              },
              {
                title: "Customer Care",
                text: "Your satisfaction is our priority — we’re here to guide you.",
              },
              {
                title: "Expertise",
                text: "Years of hands-on experience in plant care and cultivation.",
              },
              {
                title: "Community",
                text: "We believe in growing together with nature lovers everywhere.",
              },
            ].map((item, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body>
                    <h5 className="text-success">{item.title}</h5>
                    <Card.Text className="text-muted">{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 🌻 CTA Section */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: "#06331f" }}>
        <Container>
          <h2 className="mb-3">Start Your Green Journey Today!</h2>
          <p className="lead mb-4 opacity-75">
            Explore our wide collection and bring nature into your space.
          </p>
          <div className="text-center mt-4">
  <Link to="/shop" className="btn btn-outline-light btn-lg mx-2">
    Browse Plants
  </Link>
  <Link to="/contact" className="btn btn-outline-light btn-lg mx-2">
    Contact Us
  </Link>
</div>

        </Container>
      </section>
    </div>
    
  );
};

export default AboutUsPage;
