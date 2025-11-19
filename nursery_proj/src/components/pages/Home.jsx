import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Leaf, ShoppingBag, Users, Award, Phone, Mail, MapPin, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantCollection from "./Plants";
const sliderImages = [
  {
    url: "https://images.pexels.com/photos/19870193/pexels-photo-19870193.jpeg",
    title: "Vegetables Plants",
    description: "Quality plants nurtured with care",
  },
  {
    url: "https://images.pexels.com/photos/18479660/pexels-photo-18479660.jpeg",
    title: "Flower Plants",
    description: "Rare and unique plant collection",
  },
  {
    url: "https://images.pexels.com/photos/5859710/pexels-photo-5859710.jpeg",
    title: "Indoor & Outdoor",
    description: "Wide variety for every space",
  },
  {
    url: "https://images.pexels.com/photos/2280567/pexels-photo-2280567.jpeg",
    title: "Exotic Plants",
    description: "Rare and unique plant collection",
  },
];

export default function Home() {
  return (
    <>
      <Carousel fade interval={2500} controls indicators pause={false}>
        {sliderImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.url}
              alt={slide.title}
              style={{ height: "600px", objectFit: "cover" }}
            />
            <Carousel.Caption style={{ bottom: "100px" }}>
              <h2 className="fw-bold display-5">{slide.title}</h2>
              <p className="fs-5">{slide.description}</p>
              <Button
                variant="success"
                className="px-4 py-2 mt-2"
                style={{ backgroundColor: "#06331f", border: "none" }}
              >
                Shop Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
    
      <PlantCollection/>
      {/* 🌿 About Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-success mb-4">About Us</h2>
          <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
            Shree Ram Dharu Farm & Nursery is your trusted destination for premium quality
            plants. We specialize in vegetables, exotic plants, flowering plants, herbal
            plants, fruit trees, and indoor plants.
          </p>

          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <div className="bg-success text-white rounded-circle p-4 mx-auto" style={{ width: "80px", height: "80px" }}>
                <Leaf size={40} />
              </div>
              <h5 className="mt-3 text-success">Quality Plants</h5>
              <p className="text-muted small">We provide the best plants for your home and garden.</p>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className="bg-success text-white rounded-circle p-4 mx-auto" style={{ width: "80px", height: "80px" }}>
                <Users size={40} />
              </div>
              <h5 className="mt-3 text-success">Expert Care</h5>
              <p className="text-muted small">Years of experience in plant cultivation.</p>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className="bg-success text-white rounded-circle p-4 mx-auto" style={{ width: "80px", height: "80px" }}>
                <Award size={40} />
              </div>
              <h5 className="mt-3 text-success">Customer Support</h5>
              <p className="text-muted small">We help you grow and maintain your plants.</p>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className="bg-success text-white rounded-circle p-4 mx-auto" style={{ width: "80px", height: "80px" }}>
                <Heart size={40} />
              </div>
              <h5 className="mt-3 text-success">Love for Nature</h5>
              <p className="text-muted small">Our passion is nurturing life through plants.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌿 Contact Section */}
      <section className="py-1 text-white" style={{ backgroundColor: "#06331f" }}>
        <Container>
          <h2 className="text-center mb-4">Get in Touch</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="bg-white bg-opacity-25 rounded-circle p-3 mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                <Phone size={35} />
              </div>
              <h5>Call Us</h5>
              <p className="opacity-75">+91 98987 49719<br></br>
              +91 87330  64817
              </p>
            </Col>

            <Col md={4} className="mb-4">
              <div className="bg-white bg-opacity-25 rounded-circle p-3 mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                <Mail size={35} />
              </div>
              <h5>Email Us</h5>
              <p className="opacity-75">shreeramdharufarm85@gmail.com</p>
            </Col>

            <Col md={4} className="mb-4">
              <div className="bg-white bg-opacity-25 rounded-circle p-3 mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                <MapPin size={35} />
              </div>
              <h5>Visit Us</h5>
              <p className="opacity-75"> Navli- Asodar Road Andhariya,chowkdi, Navli,  <br></br> 
                Gujarat-388355</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
