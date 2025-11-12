import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


  const plants = [
  {
    id: 1,
    name: "Tomato Plant",
    type: "Vegetables",
    description: "Fresh organic tomato plant for home garden",
    price: "₹149.00",
    image: "/images/cabbage.png",
  },
  {
    id: 2,
    name: "Bell Pepper Plant",
    type: "Vegetables",
    description: "Colorful bell peppers perfect for kitchen garden",
    price: "₹129.00",
    image: "/images/tomato.png",
  },
  {
    id: 3,
    name: "Spinach Plant",
    type: "Vegetables",
    description: "Nutrient-rich leafy green vegetable plant",
    price: "₹99.00",
    image: "/images/ovalpurple.png",
  },
  {
    id: 4,
    name: "Bird of Paradise",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: "₹1299.00",
    image: "/images/chilli.png",
  },
  {
    id: 5,
    name: "Bird of Paradise",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: "₹1299.00",
    image: "/images/chilli.png",
  },
  {
    id: 6,
    name: "Bird of Paradise",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: "₹1299.00",
    image: "/images/chilli.png",
  },
  {
    id: 7,
    name: "Bird of Paradise",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: "₹1299.00",
    image: "/images/chilli.png",
  },
  {
    id: 8,
    name: "Bird of Paradise",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: "₹1299.00",
    image: "/images/chilli.png",
  },
];


const PlantCollection = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="text-success mb-3">Our Plant Collection</h2>
        <p className="text-muted mb-5">
          Browse through our carefully curated selection of plants
        </p>

        <div className="row g-4">
          {plants.map((plant) => (
            <div className="col-md-3 col-sm-6" key={plant.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={plant.image}
                  className="card-img-top"
                  alt={plant.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-start">
                  <span className="badge bg-success mb-2">{plant.type}</span>
                  <h5 className="card-title">{plant.name}</h5>
                  <p className="text-muted small mb-2">{plant.description}</p>
                  <h6 className="fw-bold">{plant.price}</h6>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button className="btn btn-success w-100">
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCollection;
